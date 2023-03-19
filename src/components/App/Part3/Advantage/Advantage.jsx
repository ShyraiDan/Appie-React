import React from "react";
import "./Advantage.css";

function Advantage(props) {
	return (
		<>
			<div className="achivements-item">
				<h4 className="achivements-item__h4">{props.title}</h4>
				<p className="achivements-item__p">{props.description}</p>
			</div>
		</>
	);
}
export default Advantage;
