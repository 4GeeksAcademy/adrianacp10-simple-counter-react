import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div class="clock">
			<i class="fas fa-clock"></i>
			<div class="number">
			<h1>{props.digitFour%10}</h1>
			<h1>{props.digitThree&10}</h1>
			<h1>{props.digitTwo%10}</h1>
			<h1>{props.digitOne%10}</h1>
			</div>
			
		</div>
	);
};

export default Home;

//no consigo poner un icono de fontawesome y no sé como hacer que el contador funcione con el setInterval
//el archivo clock.jsx es necesario o podría haberlo creado directamente desde home y el index.js ?