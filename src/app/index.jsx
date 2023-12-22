import React from "react";

import { GlobalProvider } from "../context/GlobalContext";

import { RetoFrontend } from "../containers/RetoFrontend";

export const App = () => {
	return (
		<GlobalProvider>
			<RetoFrontend />
		</GlobalProvider>
	);
};

export default App;
