import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRick from "../services/apiRick";

const Dynamic = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState({});

  useEffect(() => {
    apiRick.getCharacterDetail(id)
      .then(data => setDetails(data));
  }, [id]);

  return (
    <div className="my-modal"
      
    >
      <div className="card p-3 modal-card character-card character-card-body" style={{ width: "22rem" }}>
        
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
          className="card-img-top image-style"
          alt={details.name}
        />

        <div className="card-body">
          <h3>{details.name}</h3>

          <p>Status: {details.status}</p>
          <p>Species: {details.species}</p>
          <p>Type: {details.type || "Unknown"}</p>
          <p>Gender: {details.gender}</p>
          <p>Origin: {details.origin?.name}</p>
          <p>Location: {details.location?.name}</p>

          <button
            className="btn btn-danger w-100 portal-btn"
            onClick={() => navigate("/")}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
