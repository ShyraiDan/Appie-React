import React from "react";
import Navigation from "./Navigation";
import Burger from "./Burger/Burger";
import logoImg from "../../../../i/logo-3.png";
import "./Header.css";
function burgerClick(e) {
	const burgerMenu = document.querySelector(".header__menu");

	e.target.classList.toggle("active");
	burgerMenu.classList.toggle("active");
	document.body.classList.toggle("lock");
}
window.addEventListener("scroll", (e) => {
	let header = document.querySelector(".header_fixed");
	let scrollCl = "scrolled";
	if (window.pageYOffset > 400) {
		header.classList.add(scrollCl);
	} else {
		header.classList.remove(scrollCl);
	}
});
function Header(props) {
	return (
		<>
			<header className="header header_fixed">
				<div className="header-container">
					<div className="header-img">
						<a href="#" className="header__link">
							<img src={logoImg} />
						</a>
					</div>
					<>
						<Navigation />
					</>
					<div className="header-links">
						<a href="#" className="header__link">
							<span className="icon icon-user"></span>Login
						</a>
						<a href="#" className="header__login-btn header__login-btn_invis">
							Get Started
						</a>
						<div className="header__burger" onClick={burgerClick}>
							<span className="header__span"></span>
						</div>
						<Burger />
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;
