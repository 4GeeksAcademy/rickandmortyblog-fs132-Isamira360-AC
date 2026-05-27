import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import apiRick from "../services/apiRick.js";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CardLocation } from "../components/CardLocation.jsx";

export const Home = () => {

  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {

    apiRick.getInfo()
      .then(data =>
        dispatch({
          type: "showCharacters",
          payload: data.results
        })
      );

 apiRick.getLocation()
  .then(data => {
    if (!data) return;

    dispatch({
      type: "showLocations",
      payload: data.results
    });
  });

  }, []);

  return (

    <div className="container">
      <h2 className="mt-5">Characters</h2>
      <div className=" container d-flex overflow-auto gap-3 p-3">

        {store.characters?.map((el, i) => <Card key={i} name={el.name} url={el.url} />)}


      </div>


      <h2 className="mt-5">Locations</h2>
      <div className=" container d-flex overflow-auto gap-3 p-3">
        {store.locations?.map((el, i) => (
        <CardLocation
  key={i}
  name={el.name}
  type={el.type}
  dimension={el.dimension}
  id={el.id}
  url={el.url}
/>
        ))}
      </div>


        <h2 className="mt-5">Episode</h2>
      <div className=" container d-flex overflow-auto gap-3 p-3">

       

      </div>


    </div>

  );
};


