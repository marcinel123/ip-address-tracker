import React, {
	ChangeEvent,
	useEffect,
	useState,
} from "react";
import { useFetchLocation } from "../../api/useFetchLocation";
import { SearchProps } from "./IpAddressForm.types";
import { validateIpAddress } from "../../utils";

export const IpAddressForm = ({ setLocationData }: SearchProps) => {
	
	const [ipAddress, setIpAddress] = useState("");
	const [isformErr, setisFormErr] = useState(false)
	const { fetchLocation, isApiError} = useFetchLocation(ipAddress);
	
	useEffect(() => {
		fetchLocation().then((res) => {
			setLocationData(res?.data)
		});
	}, []);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if(validateIpAddress(e.target.value)){
			setisFormErr(true)
		} else {
			setisFormErr(false)
		}
		setIpAddress(e.target.value);
	};

	const handleFetchData = ()=>{
		fetchLocation().then((res) => {
			if (res) {
				setLocationData(res?.data);
			} else {
				setisFormErr(true)
				return null
			}
		})
	}
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if(validateIpAddress(ipAddress)){
			setisFormErr(true)
		} else {
			handleFetchData()
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
			{isformErr ? <p className="text-s text-white font-semibold sm:-mt-20">Please enter a valid IP address.</p> : null}
			{isApiError ? <p className="text-s text-white font-semibold sm:-mt-20">There is no response from server.</p> : null}
		</div>
	);
};
