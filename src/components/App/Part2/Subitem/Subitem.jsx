import React from "react";
import "./Subitem.css";
function Subitem(props) {
	return (
		<>
			<div className="item-one">
				<div className={props.class}>{props.icon}</div>
				<h4 className="item-one__h4">{props.title}</h4>
				<p className="item-one__p">
					Mucker plastered bugger all mate morish are.
				</p>
				<a href="" className="item-one__link">
					Read More<span className="icon icon-arrow-right"></span>
				</a>
			</div>
		</>
	);
}
export default Subitem;
