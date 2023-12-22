import React from "react";
import "./styles.css";

export const Component = ({
	transactionTitle,
	isDiscount,
	transactionCharge,
}) => {
	const sign = transactionCharge > 0 ? "+" : "-";
	return (
		<div className="accordion mt-2 accordion-container" id="accordionExample">
			<div className="accordion-item shadow">
				<h2 className="accordion-header">
					<button className="accordion-button collapsed" type="button">
						{transactionCharge < 0 ? (
							<div className="circle-red"></div>
						) : (
							<div className="circle-green"></div>
						)}
						<div className="row">
							<div className="col" id="transaction-container">
								<span className="fw-bold fs-6">{transactionTitle}</span>
							</div>
							<div className="col">
								{transactionCharge < 0 ? (
									<span className="transactionCharge-redFont fs-5 fw-bold">
										{sign}${Math.abs(transactionCharge)}
									</span>
								) : (
									<span className="transactionCharge-greenFont fs-5 fw-bold">
										{sign}${Math.abs(transactionCharge)}
									</span>
								)}
							</div>
						</div>
					</button>
				</h2>
			</div>
		</div>
	);
};

export { Component as TransactionItem };
