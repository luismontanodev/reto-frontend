import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export const Component = ({ children }) => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.transactionFee);
	const totalBalance = amounts.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	const incomeAmount = transactions.map(
		(transaction) => transaction.transactionFee
	);

	const incomes = incomeAmount
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0);

	const expenses =
		amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1;

	return (
		<div
			className="container text-center rounded-4 p-2 shadow bg-light"
			id="balance-container"
		>
			<div className="row mt-5">
				<span className="fw-bold">Balance del mes</span>
				<span className="text-primary fs-2 fw-bold">{`$${totalBalance}`}</span>
			</div>
			<div className="row mt-3">
				<div className="col">
					<span className="text-success fw-bold incomes-fontColor">
						Ingresos
					</span>
					<div className="row">
						<span className="text-success fs-3 fw-bold incomes-fontColor">{`+$${incomes}`}</span>
					</div>
				</div>
				<div className="col">
					<span className="text-danger fw-bold expenses-fontColor">Gastos</span>
					<div className="row">
						<span className="text-danger fs-3 fw-bold expenses-fontColor">{`-$${expenses}`}</span>
					</div>
				</div>
			</div>
			<div className="row text-center">
				<span className="fw-lighter analitics-font-size text-secondary">
					Ver analíticas
				</span>
			</div>
			<div className="row text-center">
				<span className="fw-lighter analitics-font-size">
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</div>
			<div className="row mt-5 ">{children}</div>
		</div>
	);
};

export { Component as AccountBalance };
