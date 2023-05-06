import { useState } from "react";
import api_baseUrl from "./api_baseUrl";

export const useFetchLocation = (ipAddress: string) => {
	const [isApiError, setIsApiError] = useState<boolean>(false);
	const fetchLocation = async () => {
		try {
			setIsApiError(false);
			return await api_baseUrl.get(
				`/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${ipAddress}`
			);
		} catch (err: unknown) {
			setIsApiError(true);
		}
	};
	return { fetchLocation, isApiError };
};
