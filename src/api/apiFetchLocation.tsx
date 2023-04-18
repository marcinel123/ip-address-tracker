import { useState } from "react";
import api_baseUrl from "./api_baseUrl";

export const useFetchLocation = (ipAddress: string) => {
	const [isError, setIsError] = useState({});
	const fetchLocation = async () => {
		try {
			const response = await api_baseUrl.get(
				`/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${ipAddress}`
			);
			return response;
		} catch (err: unknown) {
			if (err) {
				setIsError(err)
			}
		}
	};

	return { fetchLocation, isError };
};
