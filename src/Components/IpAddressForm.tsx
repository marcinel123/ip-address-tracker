import React, {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useFetchLocation } from "../api/useFetchLocation";

interface SearchProps {
	setLocationData: Dispatch<SetStateAction<undefined>>;
}

export const IpAddressForm = ({ setLocationData }: SearchProps) => {
	const regex = (/^(([0-9.]?)*)+$/);
	const [err, setErr] = useState(false)
	const [ipAddress, setIpAddress] = useState("");
	const { fetchLocation, isApiErr} = useFetchLocation(ipAddress);
	
	useEffect(() => {
		fetchLocation().then((res) => {
			setLocationData(res?.data);
		});
	}, []);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "" || !regex.test(ipAddress)){
			setErr(true)
		} else {
			setErr(false)
		}
		setIpAddress(e.target.value);
	};

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		
		if (ipAddress === "" || !regex.test(ipAddress)){
			setErr(true)
		}  else {
			fetchLocation().then((res) => {
				if (res) {
					setLocationData(res?.data);
				} else {
					return null
				}
			})
			setIpAddress("");
		}
		
	};

	return (
		<div className="h-1/2 sm:h-2/5 bg-bg-desktop bg-no-repeat bg-cover flex flex-col justify-start items-center ">
			<h1 className="text-l text-white font-semibold my-6 mb-4">
				IP Address Tracker
			</h1>
			<form className="w-11/12 sm:w-3/5 flex flex-row justify-center sm:mb-20">
				<label htmlFor="ip"></label>
				<input
					className="h-16 sm:h-14 w-11/12 sm:w-4/6 rounded-l-xl pl-4 placeholder:text-md"
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
			{err ? <p className="text-s text-white font-semibold sm:-mt-20">Please enter a valid IP address</p> : null}
			{isApiErr ? <p className="text-s text-white font-semibold sm:-mt-20">The IP address must be wrong as there is no response from Geo server.</p> : null}
		</div>
	);
};