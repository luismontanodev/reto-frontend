import React from "react";

import {
	Header,
	AccountBalance,
	TransactionList,
	TransactionItem,
	AddTransactionButton,
} from "../../components/index";

import "./styles.css";

export const Container = () => {
	const today = new Date();

	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);
	const formattedYesterday = yesterday.toLocaleDateString("es-ES", {
		day: "numeric",
		month: "long",
	});

	return (
		<div className="container-styles">
			<Header />
			<AccountBalance>
				<TransactionList />
				<p className="previous-date fw-bold">{`Ayer - ${formattedYesterday}`}</p>

				<TransactionItem
					transactionTitle={"Regalos navideños"}
					transactionCharge={"892.99"}
				/>
				<AddTransactionButton />
			</AccountBalance>
		</div>
	);
};

export { Container as RetoFrontend };
