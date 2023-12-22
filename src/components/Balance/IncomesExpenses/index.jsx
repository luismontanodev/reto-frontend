import React, { useContext } from "react";

import { GlobalContext } from "../../../context/GlobalContext";

export const Component = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.transactionFee);

	const incomeAmount = transactions.map(
		(transaction) => transaction.transactionFee
	);

	const incomes = incomeAmount
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const expenses =
		amounts
			.filter((item) => item < 0)
			.reduce((acc, item) => (acc += item), 0)
			.toFixed(2) * -1;

	return (
		<div className="row mt-3 incomes-expenses-container">
			<div className="col">
				<span className="fw-bold incomes-fontColor">Ingresos</span>
				<div className="row">
					<span className="fs-4 fw-bold incomes-fontColor">{`+$${incomes}`}</span>
				</div>
			</div>
			<div className="col">
				<hr
					className="my-3 mx-auto"
					style={{
						color: "gray",
						backgroundColor: "gray",
						width: "2px",
						height: "60px",
					}}
				/>
			</div>
			<div className="col">
				<span className="fw-bold expenses-fontColor">Gastos</span>
				<div className="row">
					<span className="fs-4 fw-bold expenses-fontColor">{`-$${expenses}`}</span>
				</div>
			</div>
		</div>
	);
};

export { Component as IncomesExpenses };
