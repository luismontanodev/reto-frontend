export const AppReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(({ id }) => id !== payload),
			};

		case "ADD_TRANSACTION":
			return { ...state, transactions: [payload, ...state.transactions] };

		default:
			return state;
	}
};

export default AppReducer;
