import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import { TransactionItem } from "../TransactionItem";

import "./styles.css";

export const Component = () => {
	const { transactions } = useContext(GlobalContext);

	const today = new Date();
	const formattedToday = today.toLocaleDateString("es-ES", {
		day: "numeric",
		month: "long",
	});

	return (
		<>
			<div className="d-flex justify-content-between">
				<span className="fw-bold">{`Hoy - ${formattedToday}`}</span>
			</div>
			<ul className="transaction-list">
				{transactions.map((transaction) => (
					<TransactionItem
						key={transaction.id}
						transactionTitle={transaction.transactionName}
						transactionCharge={transaction.transactionFee}
					/>
				))}
			</ul>
		</>
	);
};

export { Component as TransactionList };
