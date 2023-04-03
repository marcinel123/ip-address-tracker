import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { LocationDetails } from "./Components/LocationDetails";
import { Map } from "./Components/Map";
import { Search } from "./Components/Search";

export const App = () => {
	const [locationData, setLocationData] = useState<undefined>();

	return (
		<>
			<Search setLocationData={setLocationData} />
			{locationData ? (
				<LocationDetails locationData={locationData} />
			) : (
				<PropagateLoader color="#36d7b7" />
			)}
			{locationData ? (
				<Map locationData={locationData} />
			) : (
				<PropagateLoader color="#36d7b7" />
			)}
		</>
	);
};
