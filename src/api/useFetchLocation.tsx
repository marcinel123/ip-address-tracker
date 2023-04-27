import {  Dispatch, SetStateAction, useState } from "react";
import api_baseUrl from "./api_baseUrl";

export const useFetchLocation = (ipAddress: string) => {
	const [locationData, setLocationData] = useState<Dispatch<SetStateAction<undefined>> | undefined>();
	console.log(locationData)
	const [isApiErr, setApiErr] = useState<boolean>(false);
	
	const fetchLocation = async () => {
		try {
			setApiErr(false);
			const response = api_baseUrl.get(
				`/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${ipAddress}`
			);
			setLocationData(response)
		} catch (err: unknown) {
			setApiErr(true);	
		}
	};
	
	return { fetchLocation, isApiErr, locationData, setLocationData };
};
