import React from "react";
import "./Part2.css";
import Subitem from "./Subitem/Subitem";
function Part2(props) {
	return (
		<div className="part2">
			<div className="container1">
				<h3 className="part2__h3">What you can do</h3>
				<p className="part2__p">
					The full monty spiffing good time no biggie cack grub fantastic.
				</p>
				<div className="items">
					<div className="item-one-container animation">
						<Subitem
							class={"item-one__icon-box"}
							title={"Easy to use"}
							icon={<span className="icon icon-loop2"></span>}
						/>
					</div>
					<div className="item-one-container animation animation_delay">
						<Subitem
							class={"item-one__icon-box item-one__icon-box_blue"}
							title={"App Development"}
							icon={<span className="icon icon-neutral"></span>}
						/>
					</div>
					<div className="item-one-container animation animation_delaytwo">
						<Subitem
							class={
								"item-one__icon-box item-one__icon-box_red item-one__icon-box_paddings"
							}
							title={"Fully Functional"}
							icon={<span className="icon icon-lock"></span>}
						/>
					</div>
					<div className="item-one-container animation animation_delaythree">
						<Subitem
							class={"item-one__icon-box item-one__icon-box_purple"}
							title={"Secured protocol"}
							icon={<span className="icon icon-headphones"></span>}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Part2;
