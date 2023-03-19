import React from "react";
import "./LinkBoxItem.css";
function LinkBoxItem(props) {
	return (
		<>
			<div className="link-container link-container_footer ">
				<a
					href="#"
					className={
						props.counter == 1
							? "link-box__link link-box__link_bg"
							: "link-box__link"
					}
				>
					<span className={props.class}></span>
					Download for {props.text}
				</a>
			</div>
		</>
	);
}
export default LinkBoxItem;
