import React from "react";

import { Header } from "../../components/Header";
import { AccountBalance } from "../../components/AccountBalance";
import { TransactionList } from "../../components/TransactionList";
import { TransactionItem } from "../../components/TransactionItem";
import { AddTransaction } from "../../components/AddTransaction";

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
					transactionTitle={"Uber"}
					isDiscount={false}
					transactionCharge={"2311"}
				/>
				<AddTransaction />
			</AccountBalance>
		</div>
	);
};

export { Container as RetoFrontend };
