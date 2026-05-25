import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("ID recibido:", id);
  }, [id]);

  return (
    <div>
      esta es la pagina dinamica - ID: {id}
    </div>
  );
};

export default Dynamic;