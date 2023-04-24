import React, { useState } from "react";
import { LocationDetailsPanel } from "./Components/LocationDetailsPanel/LocationDetailsPanel";
import { Map } from "./Components/Map";
import { IpAddressForm } from "./Components/IpAddressForm";

export const App = () => {
	const [locationData, setLocationData] = useState();

	return (
		<>
			<IpAddressForm setLocationData={setLocationData} />
			<LocationDetailsPanel locationData={locationData} />
			<Map locationData={locationData} />
		</>
	);
};
