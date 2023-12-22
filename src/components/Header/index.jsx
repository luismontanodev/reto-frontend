import React from "react";

import "./styles.css";

export const Component = () => {
	return (
		<div
			className="container align-items-center text-center rounded-bottom mb-4"
			id="header-backgroundColor"
		>
			<div className="row">
				<div className="col">
					<h3 className="text-light fs-6">Octubre</h3>
				</div>
				<div className="col">
					<h3 className="text-light fs-6">Noviembre</h3>
				</div>
				<div className="col">
					<h3 className="text-light fs-4">Diciembre</h3>
				</div>
				<div className="col">
					<h3 className="text-light fs-6">Enero</h3>
				</div>
				<div className="col">
					<h3 className="text-light fs-6">Febrero</h3>
				</div>
			</div>
		</div>
	);
};

export { Component as Header };
