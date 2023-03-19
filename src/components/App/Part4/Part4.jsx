import React from "react";
import "./Part4.css";

function Part4(props) {
	return (
		<>
			<div className={props.class}>
				<div className="container3">
					<img src={props.photo} className="container3__img" />
				</div>
			</div>
		</>
	);
}

export default Part4;
