import React, { useId, useState } from "react";
import { storage } from "../../configs/firebase.configs";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { IoLocationOutline } from "react-icons/io5";
export default function ImageUpload() {
  const id = useId();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState();
  const uploadImage = () => {
    if (imageUpload === null) return;
    console.log(imageUpload);
    const imageRef = ref(storage, `${imageUpload.name + id}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList(url);
      });
    });
  };
  return (
    <>
      {imageList ? (
        <img src={imageList} alt="img" className="w_fu w_fB w_aao" />
      ) : (
        <img
          src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
          alt="custom/background-map"
          className="w_fu w_fB w_aao w_aap"
        />
      )}
      <IoLocationOutline />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}> Upload </button>
    </>
  );
}
