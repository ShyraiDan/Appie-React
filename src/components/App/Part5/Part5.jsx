import React from "react";
import "./Part5.css";
import Advantage from "./Advantage/Advantage";
function Part5(props) {
	return (
		<>
			<div className="part5">
				<div className="container4">
					<div className="container4__inner">
						<h3 className="container4__h3">{props.title}</h3>
						<p className="container4__p">
							He nicked it tickety boo harry the cras bargy chap mush spiffing
							spend a penny the full monty burke butty.
						</p>
					</div>

					<div className="advantage">
						<Advantage
							class={props.class}
							icon={props.icon}
							subtitle={props.subtitleOne}
						/>
						<Advantage
							class={props.classTwo}
							icon={props.iconTwo}
							subtitle={props.subtitleTwo}
						/>
						<div className="link-container link-container_zero">
							<a className="container4__link">
								Learn More
								<span className="icon icon-arrow-right"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Part5;
