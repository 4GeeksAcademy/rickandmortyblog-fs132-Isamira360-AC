import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import apiRick from "../services/apiRick.js";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

 apiRick.getInfo()
  .then(data =>
    dispatch({
      type: "showCharacters",
      payload: data.results
    })
  )

	return (
		<div className=" container d-flex overflow-auto gap-3 p-3">
		
		{store.characters?.map((el,i)=><Card key={i} name={el.name} url={el.url} /> )}


			</div>

	);
}; 


