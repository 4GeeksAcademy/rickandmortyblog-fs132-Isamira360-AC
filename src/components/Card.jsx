export const Card = () => {
    return (
        <div className="card flex-shrink-0" style={{ width: '18rem' }}>
            <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="card"
            />

            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title.
                </p>
                <div className=" d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">
                        Ver mas...
                    </button>
                    <i className="fa-regular fa-heart btn" style={{ color: 'rgb(236, 7, 7)' }}></i>
                </div>
            </div>
        </div>
    );
};
