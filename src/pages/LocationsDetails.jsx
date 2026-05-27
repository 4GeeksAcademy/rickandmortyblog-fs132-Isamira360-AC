import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRick from "../services/apiRick";

const LocationsDetails = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!id) return;

    apiRick.getLocationDetails(id)
      .then(data => setDetails(data));
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="card p-3">

      <h3>Name: {details.name}</h3>

      <p>Type: {details.type}</p>

      <p>Dimension: {details.dimension}</p>

      <button
        className="btn btn-danger w-100"
        onClick={() => navigate("/")}
      >
        Cerrar
      </button>

    </div>
  );
};

export default LocationsDetails;