import React from "react";
import "./Part12.css";
import Comment from "./Comment/Comment";
import Item1 from "../../../i/blog-4.jpg";
import Item2 from "../../../i/blog-5.jpg";
import Item3 from "../../../i/blog-6.jpg";
import Item4 from "../../../i/blog-7.jpg";
function Part12(props) {
	const comment = [
		{ img: Item1, title: "How to Improve Your App Store Position" },
		{ img: Item2, title: "Introducing New App Design for our iOS App" },
		{ img: Item3, title: "Engineering job is Becoming More interesting." },
		{ img: Item4, title: "20 Myths About Mobile Applications" },
	];
	return (
		<>
			<div className="part12">
				<div className="container9">
					<div className="container9-inner">
						<h3 className="container9__title">Latest blog posts</h3>
						<p className="container9__p">
							The app provides design and digital marketing.
						</p>
					</div>
					<div className="posts-container">
						{comment.map((item, i) => {
							return (
								<Comment key={item.title} img={item.img} title={item.title} />
							);
						})}
					</div>
					<div className="link-container link-container_center link-container_mid">
						<a href="#" className="container9__link">
							View All posts<span className="icon icon-arrow-right"></span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Part12;
