import React from "react";
import "./Part1.css";
function Part1(props) {
	return (
		<div className="container-inner">
			<div className="part1">
				<h1 className="part1__title">Creative way to Showcase your app</h1>
				<p className="part1__p">
					Jolly good excuse my french boot super my good sir cup of
				</p>
				<p className="part1__p">char richard about chinwag.</p>
				<div className="part1__link-container">
					<a href="#" className="part1__link part1__link_mr">
						Get a Quote
					</a>
					<a href="#" className="part1__btn">
						<span className="icon icon-play3_white"> </span>
						Play Video
					</a>
				</div>
			</div>
		</div>
	);
}
export default Part1;
