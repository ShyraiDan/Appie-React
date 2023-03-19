import React from "react";
import "./FooterLeft.css";
import FooterLogo from "../../../../i/logo-4.png";
function FooterLeft(props) {
	return (
		<>
			<div className="container-footer__left">
				<div className="container-footer__left-inner">
					<div className="link-container link-container_zero link-container_center">
						<a
							href="#"
							className="container-footer__link container-footer__link_mtzero"
						>
							<div className="container-footer__img-container">
								<img className="container-footer__img" src={FooterLogo} />
							</div>
						</a>
					</div>
					<p className="container-footer__p">
						Appie WordPress is theme is the last theme you will ever have.
					</p>
					<div className="link-container link-container_zero link-container_center">
						<a href="#" className="container-footer__link">
							Read More<span className="icon icon-arrow-right"></span>
						</a>
					</div>
					<div className="social">
						<ul className="social-list">
							{props.list.map((item) => {
								return (
									<li key={item.anchorCl} className="social-item">
										<a href="#" className={item.anchorCl}>
											<span className={item.iconCl}></span>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
export default FooterLeft;
