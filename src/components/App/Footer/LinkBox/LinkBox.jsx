import React from "react";
import "./LinkBox.css";
import LinkBoxItem from "./LinkBoxItem/LinkBoxItem";
function LinkBox(props) {
	return (
		<>
			<div className="link-box">
				{props.list.map((item, i) => {
					return (
						<LinkBoxItem
							key={item.text}
							counter={i}
							class={item.spanCl}
							text={item.text}
						/>
					);
				})}
			</div>
		</>
	);
}
export default LinkBox;
