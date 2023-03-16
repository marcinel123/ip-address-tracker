export const LocationDetails = () => {
	return (
		<div className="h-1/5 w-3/4 relative -translate-y-1/2 bg-white mx-auto flex justify-evenly items-center rounded-2xl">
			<div className="flex flex-col">
				<h3>Ip Address</h3>
				<p>1111111111111111</p>
			</div>
			<div className="flex flex-col">
				<h3>Location</h3>
				<p>Brooklyn</p>
			</div>
			<div className="flex flex-col">
				<h3>Timezone</h3>
				<p>UTC</p>
			</div>
			<div className="flex flex-col">
				<h3>ISP</h3>
				<p>Starlink</p>
			</div>
		</div>
	);
};
