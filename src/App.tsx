
import { LocationDetailsPanel } from "./Components/LocationDetailsPanel/LocationDetailsPanel";
import { Map } from "./Components/Map";
import { IpAddressForm } from "./Components/IpAddressForm";

export const App = () => {
	
	return (
		<>
			<IpAddressForm />
			<LocationDetailsPanel />
			<Map />
		</>
	);
};
