import { Link } from "react-router-dom"


export const Card = ({ name, url }) => {

    const photo = url.split('/')
    const id = photo[photo.length - 1]

    return (
       <div
  className="card flex-shrink-0 character-card"
  style={{ width: "13rem" }}
>

  <img
    src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
    alt="card"
  />

  <div className="card-body d-flex flex-column">

    <h5 className="card-title title-fixed">
      {name}
    </h5>

    <div className="mt-auto d-flex justify-content-between align-items-center">

      <Link to={`/dynamic/${id}`}>

        <button className="btn portal-btn">
          See more...
        </button>

      </Link>

      <i className="fa-regular fa-heart favorite-icon"></i>

    </div>
  </div>
</div>
    );
};
