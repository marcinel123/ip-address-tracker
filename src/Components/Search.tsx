import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useFetchLocation } from "../api/apiFetchLocation";

interface SearchProps {
	setLocationData: Dispatch<SetStateAction<undefined>>;
}

export const Search = ({ setLocationData }: SearchProps) => {
	// added ip address from US just for checking is fetchLocation works fine
	const [ipAddress, setIpAddress] = useState("");
	const { fetchLocation } = useFetchLocation(ipAddress);
	console.log(ipAddress);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setIpAddress(e.target.value);
	};

	const handleButtonClick = () => {
		fetchLocation();
		setLocationData();
	};

	return (
		<div className="h-1/3 bg-bg-desktop flex flex-col justify-start items-center">
			<h1 className="text-2xl text-white font-semibold my-7">
				IP Address Tracker
			</h1>
			<form className="w-11/12 sm:w-3/5 flex flex-row justify-center">
				<label htmlFor="ip"></label>
				<input
					className="h-12 w-11/12 sm:w-3/6 rounded-l-xl pl-4 placeholder:text-md"
					type="text"
					placeholder="
			Search for any IP address or domain"
					id="ip"
					value={ipAddress}
					onChange={handleInputChange}
				/>
				<button
					onClick={handleButtonClick}
					className="w-1/12 max-w-2 bg-black text-white rounded-r-xl"
				>
					&gt;
				</button>
			</form>
		</div>
	);
};
