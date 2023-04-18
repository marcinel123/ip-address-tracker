import { ClipLoader } from "react-spinners";

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

export const LocationDetails = ({ locationData }: LocationDetailsProps) => {
	if (!locationData) {
		return null;
	}
	const { ip, isp, location } = locationData;
	const { country, timezone, city} = location;

	return (
		<div className="sm:divide-x divide-line-color w-11/12 sm:w-3/4 z-10 p-4 relative translate-y-24 sm:-translate-y-2 bg-white mx-auto -mb-24 -mt-52 sm:-mb-16 sm:-mt-14 flex flex-col sm:flex-row items-center rounded-2xl">
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start sm:pl-1">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					IP ADDRESS
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
					{locationData ? ip : <ClipLoader color="##5974db" />}
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					LOCATION
				</p>
				<p className="text-s sm:text-xs text-center text-black font-bold my-1 sm:my-3">
				{locationData ? country : <ClipLoader color="##5974db" />}, 
				{locationData ? city : <ClipLoader color="##5974db" />}, 
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					TIMEZONE
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
				{locationData ? timezone : <ClipLoader color="##5974db" />}
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					ISP
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
				{locationData ? isp.substring(0, 20) : <ClipLoader color="#36d7b7" />}
				</p>
			</div>
		</div>
	);
};
