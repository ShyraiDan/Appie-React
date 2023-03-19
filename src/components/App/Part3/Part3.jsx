import React from "react";
import "./Part3.css";
import Part3Img from "../../../i/fun-fact-thumb.png";
import Advantage from "./Advantage/Advantage";
function Part3(props) {
	const advantage = [
		{ title: "700k", description: "App Downloads" },
		{ title: "476+", description: "Average Review" },
		{ title: "30M", description: "Active Users" },
	];
	return (
		<>
			<div className="part3 animation">
				<div className="container2">
					<div className="container2__inner">
						<h3 className="container2__h3">Get started with Appie Template.</h3>
						<p className="container2__p">
							The app provides design and digital marketing, applied arts can
							include industrial design
						</p>
						<div className="achivements">
							{advantage.map((item, i) => {
								return (
									<Advantage
										key={`${item.title}-${i}`}
										title={item.title}
										description={item.description}
									/>
								);
							})}
						</div>
					</div>
					<div className="container2__inner2">
						<div className="white-btn">
							<a href="" className="white-btn__link">
								<span className="icon icon-play3"></span>
							</a>
						</div>
						<div className="container2__img-container">
							<img src={Part3Img} alt="" className="container2__img" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Part3;
