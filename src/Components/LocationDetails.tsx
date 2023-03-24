export const LocationDetails = ({ locationData }) => {
	console.log(locationData);

	return (
		<div className="sm:divide-x divide-line-color w-5/6 sm:w-3/4 z-10 p-4 relative translate-y-1/2 bg-white mx-auto flex flex-col sm:flex-row items-center rounded-2xl">
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start sm:pl-1">
				<p className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					IP ADDRESS
				</p>
				<p className="text-black font-semibold my-3"></p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					LOCATION
				</p>
				<p className="text-black font-semibold my-3"></p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					TIMEZONE
				</p>
				<p className="text-black font-semibold my-3">UTC</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<p className="text-xxs mt-3 mb-0 text-text-color font-semibold">ISP</p>
				<p className="text-black font-semibold my-3"></p>
			</div>
		</div>
	);
};
