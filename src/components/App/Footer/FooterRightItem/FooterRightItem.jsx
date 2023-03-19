import React from "react";
import "./FooterRightItem.css";
function FooterRightItem(props) {
	return (
		<li key={props.text} className="footer-nav__item">
			<a href="#" className="footer-nav__link footer-nav__link_info">
				<span className={props.class}></span>
				{props.text}
			</a>
		</li>
	);
}
export default FooterRightItem;
