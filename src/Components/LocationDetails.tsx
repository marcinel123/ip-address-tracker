export const LocationDetails = () => {
	return (
		<div className="sm:divide-x divide-line-color w-5/6 sm:w-3/4 z-10 p-4 relative translate-y-1/2 bg-white mx-auto flex flex-col sm:flex-row items-center rounded-2xl">
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start sm:pl-1">
				<h3 className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					IP ADDRESS
				</h3>
				<p className="text-black font-semibold my-3">1111111111111111</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<h3 className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					LOCATION
				</h3>
				<p className="text-black font-semibold my-3">Brooklyn</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<h3 className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					TIMEZONE
				</h3>
				<p className="text-black font-semibold my-3">UTC</p>
			</div>
			<div className="flex flex-col sm:w-1/4 pl-4 items-center sm:items-start">
				<h3 className="text-xxs mt-3 mb-0 text-text-color font-semibold">
					ISP
				</h3>
				<p className="text-black font-semibold my-3">Starlink</p>
			</div>
		</div>
	);
};
