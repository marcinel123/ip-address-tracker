interface LocationDetailsProps {
	locationData: {
		as: object;
		ip: string;
		isp: string;
		location: {
			country: string;
			timezone: string;
			city: string;
			region: string;
		};
	};
}

export const LocationDetails = ({ locationData }: LocationDetailsProps) => {
	const { ip, isp, location } = locationData;
	const { country, timezone, city, region } = location;

	return (
		<div className="sm:divide-x divide-line-color w-11/12 sm:w-3/4 z-10 p-4 relative translate-y-24 sm:-translate-y-2 bg-white mx-auto -mb-16 -mt-52 sm:-mb-14 sm:-mt-12 flex flex-col sm:flex-row items-center rounded-2xl">
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start sm:pl-1">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					IP ADDRESS
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
					{ip}
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					LOCATION
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
					{country}, {city}, {region}
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					TIMEZONE
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
					{timezone}
				</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xs sm:text-xxs mt-1 sm:mt-3 sm:mb-0 text-text-color font-bold">
					ISP
				</p>
				<p className="text-s sm:text-xs text-black font-bold my-1 sm:my-3">
					{isp.substring(0, 20)}
				</p>
			</div>
		</div>
	);
};
