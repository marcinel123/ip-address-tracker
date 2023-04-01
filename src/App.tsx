import React, { useState } from "react";
import { LocationDetails } from "./Components/LocationDetails";
import { Map } from "./Components/Map";
import { Search } from "./Components/Search";

export const App = () => {
	const [locationData, setLocationData] = useState<undefined>();
	console.log(locationData);

	return (
		<>
			<Search setLocationData={setLocationData} />
			{locationData ? <LocationDetails locationData={locationData} /> : ""}
			{locationData ? <Map locationData={locationData} /> : ""}
		</>
	);
};
