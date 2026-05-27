import { Link } from "react-router-dom";

export const CardLocation = ({ name, type, dimension,url, id }) => {


      
  return (
    <div className="card flex-shrink-0" style={{ width: '13rem' }}>

      <div className="card-body">

        <h4>{name}</h4>
        
        <div className="d-flex justify-content-between align-items-center">

          <Link to={`/location/${id}`}>
            <button className="btn btn-primary">
              Ver mas...
            </button>

             <i className="fa-regular fa-heart btn" style={{ color: 'rgb(236, 7, 7)' }}></i>
          </Link>

        </div>

      </div>
    </div>
  );
};