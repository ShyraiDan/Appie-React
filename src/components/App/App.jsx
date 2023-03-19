import React from "react";
import Header from "./Part1/Header/Header";
import Part1 from "./Part1/Part1";
import Part2 from "./Part2/Part2";
import Part3 from "./Part3/Part3";
import Part4 from "./Part4/Part4";
import Part5 from "./Part5/Part5";
import Part8 from "./Part8/Part8";
import Part9 from "./Part9/Part9";
import Part10 from "./Part10-11/Part10";
import Part12 from "./Part12/Part12";
import Part13 from "./Part13/Part13";
import Footer from "./Footer/Footer";
import Part4Img from "../../i/about-thumb-2.png";
import Part6Img from "../../i/about-thumb-3.png";
import Part10Img from "../../i/download-thumb-1.png";
import Part11Img from "../../i/download-thumb-2.png";
import "./App.css";

function App(props) {
	document.onscroll = function () {
		let anim = document.querySelectorAll(".animation");
		if (anim.length > 0) {
			function animScroll() {
				for (let i = 0; i < anim.length; i++) {
					const animItem = anim[i];
					const animHeight = animItem.offsetHeight;
					const animPosition = offset(animItem).top;
					const animStart = 4;

					let animItemPoint = window.innerHeight - animHeight / animStart;

					if (animHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animStart;
					}

					if (
						window.pageYOffset > animPosition - animItemPoint - 400 &&
						window.pageYOffset < animPosition + animHeight
					) {
						animItem.classList.add("active-animation");
					}
				}
			}
			function offset(el) {
				const rect = el.getBoundingClientRect(),
					scrollLeft =
						window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.top + scrollLeft };
			}
			animScroll();
		}
	};
	return (
		<>
			<div className="container">
				<Header />
				<Part1 />
			</div>
			<Part2 />
			<Part3 />
			<div className="grid-container animation">
				<Part4 photo={Part4Img} class={"part4"} />
				<Part5
					title={"Appie lets you launch your app in minutes."}
					subtitleOne={"Carefully designed"}
					subtitleTwo={"Seamless Sync"}
					icon={<span className="icon icon-display"></span>}
					iconTwo={<span className="icon icon-loop2"></span>}
					class={
						"advantage-item__icon-container advantage-item__icon-container_blue"
					}
					classTwo={
						"advantage-item__icon-container advantage-item__icon-container_green"
					}
				/>
			</div>
			<div className="grid-container animation">
				<Part4 photo={Part6Img} class={"part4 part4_reverse"} />
				<Part5
					title={"Browse over 40k Apps over the world"}
					subtitleOne={"User Interactive"}
					subtitleTwo={"Choose a App"}
					icon={<span className="icon icon-users"></span>}
					iconTwo={<span className="icon icon-tablet"></span>}
					class={
						"advantage-item__icon-container advantage-item__icon-container_purple"
					}
					classTwo={
						"advantage-item__icon-container advantage-item__icon-container_red"
					}
				/>
			</div>
			<Part8 />
			<Part9 />
			<div className="grid-container1 animation">
				<Part10
					title={"Android"}
					device={"Android"}
					photo={Part10Img}
					class={"container8__link"}
					classContainer={"container8-img"}
					icon={<span className="icon icon-android"></span>}
				/>
				<Part10
					title={"iOS & iPadOS"}
					device={"iOS"}
					photo={Part11Img}
					class={"container8__link container8__link_red"}
					classContainer={"container8-img container8-img_left"}
					icon={<span className="icon icon-appleinc"></span>}
				/>
			</div>
			<Part12 />
			<Part13 />
			<Footer />
		</>
	);
}
export default App;
