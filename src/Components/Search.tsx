import React, {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useFetchLocation } from "../api/apiFetchLocation";

interface SearchProps {
	setLocationData: Dispatch<SetStateAction<undefined>>;
}

export const Search = ({ setLocationData }: SearchProps) => {
	const regex = (/^(([0-9.]?)*)+$/);
	const [ipAddress, setIpAddress] = useState("");
	const { fetchLocation, isError, setIsError } = useFetchLocation(ipAddress);
	
	useEffect(() => {
		fetchLocation().then((res) => {
			setLocationData(res?.data);
		});
	}, []);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "" || !regex.test(ipAddress)){
			setIsError(true)
		} else {
			setIsError(false)
		}
		setIpAddress(e.target.value);
	};

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		
		if (ipAddress === "" || !regex.test(ipAddress)){
			setIsError(true)
		}  else {
			fetchLocation().then((res) => {
				if (res) {
					setLocationData(res?.data);
				} else {
					setIsError(true)
					return null
				}
			})
			setIpAddress("");
		}
		
	};

	return (
		<div className="h-2/5 bg-bg-desktop bg-no-repeat bg-cover flex flex-col justify-start items-center -z-10">
			<h1 className="text-l text-white font-semibold my-7">
				IP Address Tracker
			</h1>
			<form className="w-11/12 sm:w-3/5 flex flex-row justify-center sm:mb-20">
				<label htmlFor="ip"></label>
				<input
					className="h-20 sm:h-14 w-11/12 sm:w-4/6 rounded-l-xl pl-4 placeholder:text-md"
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
			{isError ? <p className="text-s text-white font-semibold">Please enter a valid IP address</p> : null}
		</div>
	);
};
