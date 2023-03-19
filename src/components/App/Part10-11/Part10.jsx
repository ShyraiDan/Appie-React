import React from "react";
import "./Part10.css";
function Part10(props) {
	return (
		<>
			<div className="part10">
				<div className="container8">
					<div className="container8-inner">
						<h3 className="container8__h3">{props.title}</h3>
						<p className="container8__p">
							Download app for {props.device} today — it's free.
						</p>
						<a href="#" className={props.class}>
							{props.icon}Download for {props.device}
						</a>
					</div>
					<div className={props.classContainer}>
						<img src={props.photo} className="container8__img" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Part10;
