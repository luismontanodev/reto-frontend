import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	transactions: [
		{ id: 1, transactionName: "Uber", transactionFee: -127.63 },
		{ id: 2, transactionName: "Transferencia Ana", transactionFee: 503.47 },
		{ id: 3, transactionName: "Netflix", transactionFee: -105.22 },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const contextValue = {
		...state,
		dispatch,
		addTransaction: (transaction) =>
			dispatch({ type: "ADD_TRANSACTION", payload: transaction }),
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
};
