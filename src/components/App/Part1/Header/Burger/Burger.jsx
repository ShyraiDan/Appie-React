import React from "react";
import { useState } from "react";
import "./burger.css";
import burgerLogo from "../../../../../i/logo.png";
import FooterRightItem from "../../../Footer/FooterRightItem/FooterRightItem";
function Burger(props) {
	const [selected, setSelected] = useState(null);
	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}
		setSelected(i);
	};
	const acordeon = [
		{ title: "Home" },
		{ title: "Service" },
		{ title: "Pages" },
		{ title: "News" },
		{ title: "Contact" },
	];
	const social = [
		{ spanCl: "icon icon-facebook-blue" },
		{ spanCl: "icon icon-twitter-blue" },
		{ spanCl: "icon icon-instagram-blue" },
		{ spanCl: "icon icon-linkedin2-blue" },
	];
	const nums = [1, 2, 3, 4, 5];
	return (
		<nav className="header__menu">
			<div className="header__icon">
				<img src={burgerLogo} />
			</div>
			<ul className="header__list">
				{acordeon.map((item, i) => {
					return (
						<li key={"burger-" + item.title}>
							<a className="header__sub-link" onClick={() => toggle(i)}>
								{item.title}
							</a>
							<div className={selected == i ? "acordeon show" : "acordeon"}>
								<ul className="sub-burger">
									{nums.map((item, k) => {
										return (
											<li
												key={`${acordeon[i].title}-acordion-${k}`}
												className="sub-burger__item"
											>
												<a className="sub-burger__link" href="">
													{acordeon[i].title} {nums[k]}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="social social_mt">
				{social.map((item, i) => {
					return (
						<a key={"icon-footer" + i} className="social__item">
							<span className={item.spanCl}></span>
						</a>
					);
				})}
			</div>
			<ul className="footer-nav__list">
				<FooterRightItem
					key={"burger-bottom" + 1}
					class={"icon icon-envelop"}
					text={"support@appie.com"}
				/>
				<FooterRightItem
					key={"burger-bottom" + 2}
					class={"icon icon-phone"}
					text={"+(642) 342 762 44"}
				/>
				<FooterRightItem
					key={"burger-bottom" + 3}
					class={"icon icon-location2"}
					text={"442 Belle Terre St Floor 7, San Francisco, AV 4206"}
				/>
			</ul>
		</nav>
	);
}

export default Burger;
