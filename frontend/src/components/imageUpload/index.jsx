import React, { useEffect, useId, useState } from "react";
import { storage } from "../../configs/firebase.configs";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { IoImages } from "react-icons/io5";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import { async } from "@firebase/util";
import Loading from "../Loading";
export default function ImageUpload() {

  const id = useId();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);




  // const uploadImage = () => {
  //   if (imageUpload === null) return;
  //   console.log(imageUpload);
  //   const imageRef = ref(storage, `${imageUpload.name + id}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList(url);
  //     });
  //   });
  // };
  const style = {
    uploadedImage: {
      maxHeight: "200px",
      overflow: "hidden"
    },

    image: {
      width: "35px",
      maxHeight: "35px",
      opacity: "0",
      cursor: "pointer",
      position: "absolute",
      zIndex: "1",
    },
    container: {
      position: "absolute",
      bottom: 0,
      right: "50px",
    },
    svg: {
      fontSize: "35px",
      cursor: "pointer",
      filter:
        "invert(56%) sepia(17%) saturate(473%) hue-rotate(194deg) brightness(84%) contrast(80%)",
    },
  };

  useEffect(() => {
    //preview;
    const uploadImage = async () => {
      setIsLoading(true);
      if (!selectedFile) {
        setPreview(undefined);
        setIsLoading(false);
        return;
      }
      const { isSuccess, imageUrl, message } = await storeImageToFireBase(selectedFile);
      console.log("DONE");
      if (isSuccess)
        //save this image to redux (thumbnail);
        setPreview(imageUrl);
      else {
        console.log(message);
      }
      setIsLoading(false);
    }

    uploadImage();

  }, [selectedFile]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  return (
    <div style={style.uploadedImage}>
      {(!selectedFile || isLoading) ? (
        <img
          src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
          alt="custom/background-map"
          className="w_fu w_fB w_aao w_aap "
        />
      ) : (
        <img src={preview} alt="img" className="w_fu w_fB w_aao" />
      )}
      <div style={style.container}>
        {isLoading ? <Loading /> :
          <div>
            <input
              style={style.image}
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              id="upload"
            />
            <label htmlFor="upload">
              <IoImages style={style.svg} />
              <button onClick={onSelectFile}>Upload</button>
            </label>
          </div>}
      </div>
    </div >
  );
}
