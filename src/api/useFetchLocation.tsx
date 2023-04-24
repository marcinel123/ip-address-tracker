import { useState } from "react";
import api_baseUrl from "./api_baseUrl";

export const useFetchLocation = (ipAddress: string) => {
	const [isApiErr, setApiErr] = useState<boolean>(false);
	const fetchLocation = async () => {
		try {
			setApiErr(false);
			return await api_baseUrl.get(
				`/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${ipAddress}`
			);
		} catch (err: unknown) {
			setApiErr(true);	
		}
	};

	return { fetchLocation, isApiErr};
};
