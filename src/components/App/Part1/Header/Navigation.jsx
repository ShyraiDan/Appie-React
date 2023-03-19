import React from "react";
import "./Navigation.css";
function Navigation(props) {
	const acordeon = [
		{ title: "Home" },
		{ title: "Service" },
		{ title: "Pages" },
		{ title: "News" },
		{ title: "Contact" },
	];
	const nums = [1, 2, 3, 4, 5];
	return (
		<>
			<nav className="nav-bar">
				<ul className="nav-bar__list">
					{acordeon.map((item, i) => {
						return (
							<li key={"nav-" + item.title} className="list-item">
								<a className="nav-bar__item" href="#">
									{item.title}
								</a>
								<ul className="sublist">
									{nums.map((item, k) => {
										return (
											<li
												key={`nav-item-${item}`}
												className={
													k == 0
														? "sublist__item sublist__item_f"
														: k == nums.length - 1
														? "sublist__item sublist__item_l"
														: "sublist__item"
												}
											>
												<a className="sublist__link" href="#">
													{acordeon[i].title} {nums[k]}
												</a>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
