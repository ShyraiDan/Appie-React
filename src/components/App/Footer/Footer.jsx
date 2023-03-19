import React from "react";
import "./Footer.css";

import FooterRightItem from "./FooterRightItem/FooterRightItem";
import FooterCenter from "./FooterCenter/FooterCenter";
import LinkBox from "./LinkBox/LinkBox";
import FooterLeft from "./FooterLeft/FooterLeft";
function Footer(props) {
	const socialItem = [
		{ anchorCl: "social-item__fb", iconCl: "icon icon-facebook" },
		{ anchorCl: "social-item__tw", iconCl: "icon icon-twitter" },
		{ anchorCl: "social-item__inst", iconCl: "icon icon-instagram" },
		{ anchorCl: "social-item__in", iconCl: "icon icon-linkedin2" },
	];
	const leftCenter = [
		{ text: "About Us" },
		{ text: "Service" },
		{ text: "Case Studies" },
		{ text: "Blog" },
		{ text: "Contact" },
	];
	const rightCenter = [
		{ text: "Community" },
		{ text: "Resources" },
		{ text: "Faqs" },
		{ text: "Privacy Policy" },
		{ text: "Careers" },
	];
	const FooterRight = [
		{ class: "icon icon-envelop", text: "support@appie.com" },
		{ class: "icon icon-phone", text: "+(642) 342 762 44" },
		{
			class: "icon icon-location2",
			text: "442 Belle Terre St Floor 7, San Francisco, AV 4206",
		},
	];
	const endBtn = [
		{ spanCl: "icon icon-appleinc icon-appleinc_black", text: "iOS" },
		{ spanCl: "icon icon-android", text: "Android" },
	];
	return (
		<footer>
			<div className="container-footer">
				<div className="container-footer__width">
					<div className="container-footer__inner">
						<FooterLeft key={"left"} list={socialItem} />
						<FooterCenter
							key={"left-center"}
							list={leftCenter}
							title={"Company"}
						/>
						<FooterCenter
							key={"right-center"}
							list={rightCenter}
							title={"Support"}
						/>
						<div className="container-footer__right">
							<h4 className="container-footer__title">Get In Touch</h4>
							<ul className="footer-nav__list">
								{FooterRight.map((item, i) => {
									return (
										<FooterRightItem
											key={item.text + i}
											class={item.class}
											text={item.text}
										/>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="container-footer__under">
						<LinkBox list={endBtn} />
						<div className="coop-info">
							<p className="coop-info__text">
								Copyright ©{new Date().getFullYear()} Appie. All rights
								reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
