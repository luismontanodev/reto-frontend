import React from "react";

import "./styles.css";

export const Component = () => {
	return (
		<div
			className="container text-center rounded-bottom mb-4"
			id="header-backgroundColor"
		>
			<div className="d-flex justify-content-between">
				<h3 className="text-light fs-6">Octubre</h3>
				<h3 className="text-light fs-6">Noviembre</h3>
				<h3 className="text-light fs-4">Diciembre</h3>
				<h3 className="text-light fs-6">Enero</h3>
				<h3 className="text-light fs-6">Febrero</h3>
			</div>
		</div>
	);
};

export { Component as Header };
