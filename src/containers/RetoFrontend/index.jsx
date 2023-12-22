import React from "react";

import {
	Header,
	AccountBalance,
	TransactionList,
	AddTransactionButton,
} from "../../components/index";

import "./styles.css";

export const Container = () => {
	return (
		<div className="container-styles">
			<Header />
			<AccountBalance>
				<TransactionList />
				<AddTransactionButton />
			</AccountBalance>
		</div>
	);
};

export { Container as RetoFrontend };
