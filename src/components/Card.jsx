import { Link } from "react-router-dom"


export const Card = ({ name, url }) => {

    const photo = url.split('/')
    const id = photo[photo.length - 1]

    return (
        <div className="card flex-shrink-0" style={{ width: '13rem' }}>
            <img
                src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}

                alt="card"
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className=" d-flex justify-content-between align-items-center">

                    <Link to={`/dynamic/${id}`}>
                        <button className="btn btn-primary">
                            Ver mas...
                        </button>
                    </Link>

                    <i className="fa-regular fa-heart btn" style={{ color: 'rgb(236, 7, 7)' }}></i>
                </div>
            </div>
        </div>
    );
};
