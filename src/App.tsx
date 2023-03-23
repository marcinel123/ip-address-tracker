import React from "react";
import { LocationDetails } from "./Components/LocationDetails";
import { Map } from "./Components/Map";
import { Search } from "./Components/Search";

export const App = () => {
	return (
		<>
			<Search />
			<LocationDetails />
			<Map />
		</>
	);
};
