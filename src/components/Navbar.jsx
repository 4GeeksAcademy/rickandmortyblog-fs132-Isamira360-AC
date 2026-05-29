import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/"className="text-decoration-none">
					<span className=" mb-0 h1 text-white">Rick and Morty</span>
				</Link>
				<div className="ml-auto">					
						<button className="btn btn-primary portal-btn">Favorites</button>					
				</div>
			</div>
		</nav>
	);
};