import api_baseUrl from "./api_baseUrl";

export const useFetchLocation = (ipAddress: string) => {
	const fetchLocation = async () => {
		try {
			await api_baseUrl.get(
				`/country?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${ipAddress}`
			);
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	return { fetchLocation };
};
