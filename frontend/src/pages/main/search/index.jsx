import { setDate } from "date-fns/esm";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/search/header";
import Travelers from "../../../components/search/travelers";
import TripList from "../../../components/search/Trips";
import useQuery from "../../../hooks/useQuery";

const API_URL = process.env.REACT_APP_API_URL;

const SearchPage = () => {
  const query = useQuery();
  const text = query.get("text");
  const [data, setData] = useState({
    trips: [],
    users: [],
  })

  useEffect(() => {
    console.log(query.get("text"));
    const fetchData = async () => {
      fetch(`${API_URL}/api/search?text=${text}`, {
        method: "GET",
      })
        .then(response => response.json())
        .then(result => {
          setData(data => ({
            ...data,
            users: result.users,
            trips: result.trips
          }))
        }).catch(err => {
          console.log(err);
        })
    }
    fetchData();
  }, [text]);

  return (
    <>
      <Header keyword={text} />
      <Travelers travelers={data.users} />
      <TripList trips={data.trips} />
    </>
  );
};

export default SearchPage
