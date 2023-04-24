export interface LocationDetailsProps {
	locationData:
		| {
				as: object;
				ip: string;
				isp: string;
				location: {
					country: string;
					timezone: string;
					city: string;
					region: string;
				};
		  }
		| undefined;
}