import React from "react";
import "./FooterCenter.css";

function FooterCenter(props) {
	return (
		<>
			<div className="container-footer__center">
				<h4 className="container-footer__title">{props.title}</h4>
				<div className="footer-nav">
					<ul className="footer-nav__list">
						{props.list.map((item, i) => {
							return (
								<li key={item.text} className="footer-nav__item">
									<a href="#" className="footer-nav__link">
										{item.text}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
export default FooterCenter;
