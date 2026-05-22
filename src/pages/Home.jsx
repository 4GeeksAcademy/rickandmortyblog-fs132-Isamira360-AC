import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className=" container d-flex overflow-auto gap-3 p-3">
			

<Card/>	
			</div>

	);
}; 