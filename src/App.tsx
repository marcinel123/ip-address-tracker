import React from "react";
import { DisplayDataComponent } from "./Components/DisplayDataComponent";
import { MapComponent } from "./Components/MapComponent";
import { SearchComponent } from "./Components/SearchComponent";

export const App = () => {
	return (
		<>
			<SearchComponent />
			<DisplayDataComponent />
			<MapComponent />
		</>
	);
};
