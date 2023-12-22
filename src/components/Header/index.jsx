import React, { useContext } from "react";

import "./styles.css";

import { GlobalContext } from "../../context/GlobalContext";

const months = [
	"enero",
	"febrero",
	"marzo",
	"abril",
	"mayo",
	"junio",
	"julio",
	"agosto",
	"septiembre",
	"octubre",
	"noviembre",
	"diciembre",
];

export const Component = () => {
	const { currentMonth } = useContext(GlobalContext);
	return (
		<div
			className="fluid text-center rounded-bottom mb-4"
			id="header-backgroundColor"
		>
			<div className="month-scroll-container">
				{months.map((month, index) => (
					<h3
						className={`text-light fs-6 ${
							currentMonth === month ? "fw-bold" : "fw-normal"
						}`}
						key={index}
						onClick={() => console.log()}
					>
						{month}
					</h3>
				))}
			</div>
		</div>
	);
};

export { Component as Header };
