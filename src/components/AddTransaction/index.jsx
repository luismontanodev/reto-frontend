import React, { useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import "./styles.css";

export const Component = () => {
	const { transactions, addTransaction } = useContext(GlobalContext);

	const [transactionName, setArgument] = useState("");
	const [transactionFee, setMoney] = useState("");
	const [error, setError] = useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "transactionName") {
			setArgument(value);
		} else if (name === "transactionFee") {
			setMoney(value);
		}
	};

	const handleAddTransaction = () => {
		if (!transactionName.trim() || !transactionFee.trim()) {
			setError("Ambos campos son requeridos.");
			return;
		}

		const newTransaction = {
			id: transactions.length + 1,
			transactionName,
			transactionFee: parseFloat(transactionFee) || 0,
		};

		addTransaction(newTransaction);

		setArgument("");
		setMoney("");
		setError("");
	};

	return (
		<div className="container-sm mb-4">
			<button
				className="btn btn-info w-30 p-3 button-width fixed-bottom"
				data-bs-toggle="modal"
				data-bs-target="#addTransaction-modal"
			>
				Agregar Movimiento
			</button>
			<div className="modal fade" id="addTransaction-modal" tabIndex="-1">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Añadir registro</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<input
								type="text"
								name="transactionName"
								value={transactionName}
								onChange={handleInputChange}
								placeholder="Concepto"
							/>
							<input
								type="number"
								name="transactionFee"
								value={transactionFee}
								onChange={handleInputChange}
								placeholder="Cantidad..."
							/>
							{error && <p className="text-danger">{error}</p>}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cancelar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleAddTransaction}
							>
								Agregar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Component as AddTransaction };
