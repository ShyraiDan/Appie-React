import React from "react";
import "./Comment.css";
function Comment(props) {
	const iconsCl = ["icon icon-clock", "icon icon-bubbles2"];
	return (
		<>
			<div className="posts">
				<div className="post-item">
					<img className="post-item__img" src={props.img} />
					<div className="post-item__container">
						<div className="post-item__link-container">
							<a href="#" className="post-item__link">
								{props.title}
							</a>
						</div>
						<div className="time">
							<ul className="time-list">
								{iconsCl.map((item, i) => {
									return (
										<li key={"icon-date-" + i} className="time-list__item">
											<span className={item}></span> July 14, 2022
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Comment;
