import React, { useContext } from "react";

import { GlobalContext } from "../../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { IncomesExpenses } from "../IncomesExpenses";

import "./styles.css";

export const Component = ({ children }) => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.transactionFee);
	const totalBalance = amounts
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		.toFixed(2);

	return (
		<div
			className="container text-center rounded-4 p-2 shadow bg-light"
			id="balance-container"
		>
			<div className="row mt-2">
				<span className="fw-bold">Balance del mes</span>
				<span
					className="fs-4 fw-bold"
					id="totalBalance-color"
				>{`$${totalBalance}`}</span>
			</div>
			<IncomesExpenses />
			<div className="row text-center">
				<span className="fw-lighter analitics-font-size text-secondary">
					Ver analíticas
				</span>
			</div>
			<div className="row text-center">
				<span className="fw-lighter analitics-font-size">
					<FontAwesomeIcon icon={faChevronDown} style={{ color: "gray" }} />
				</span>
			</div>
			<div className="row mt-5">{children}</div>
		</div>
	);
};

export { Component as AccountBalance };
