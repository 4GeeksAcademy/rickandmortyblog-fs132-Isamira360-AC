import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRick from "../services/apiRick";

const EpisodeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!id) return;

    apiRick.getEpisodeDetails(id)
      .then(data => setDetails(data));
  }, [id]);

  useEffect(() => {
    if (!details?.characters?.length) return;

    const ids = details.characters.map(url =>
      url.split("/").pop()
    );

    Promise.all(
      ids.map(id => apiRick.getCharacterDetail(id))
    ).then(data => {
      setCharacters(data);
    });

  }, [details]);

  if (!details) return <p>Loading...</p>;

   return (
    <div className="card p-3 character-card character-card-body">

      <h3>Name: {details.name}</h3>
      <p>Episode: {details.episode}</p>
      <p>Air date: {details.air_date}</p>
      

      <p className="mt-3">Characters:</p>

      <div className="d-flex gap-2 flex-wrap">
        {characters.map(char => (
          <div key={char.id} className="card p-2" style={{ width: "10rem" }}>
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

       <button
        className="btn btn-danger w-100 mt-3"
        onClick={() => navigate("/")}
      >
        Cerrar
      </button>

    </div>
  );
};

export default EpisodeDetails;