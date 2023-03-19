import React from "react";
import "./Advantage.css";
function Advantage(props) {
	return (
		<div className="advantage-item">
			<div className="advantage-item__container">
				<div className="advantage-item__icon-subcontainer">
					<div className={props.class}>{props.icon}</div>
				</div>
				<h4 className="advantage-item__title">{props.subtitle}</h4>
				<p className="advantage-item__p">
					Mucker plastered bugger all mate morish are.
				</p>
			</div>
		</div>
	);
}
export default Advantage;
