import React, {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useFetchLocation } from "../api/useFetchLocation";

// interface SearchProps {
// 	setLocationData: Dispatch<SetStateAction<undefined>>;
// }

export const IpAddressForm = () => {
	const regex = (/^(([0-9.]?)*)+$/);
	const [err, setErr] = useState(false)
	const [ipAddress, setIpAddress] = useState("");
	console.log(ipAddress)
	const { fetchLocation, setLocationData, isApiErr} = useFetchLocation(ipAddress);

	// useEffect(() => {
	// 	fetchLocation().then((res) => {
	// 		setLocationData(res?.data);
	// 	});
	// }, []);

	const validateInputField = (event: string, ipAddress: string, regex: RegExp)=>{

		console.log(event)
		console.log(regex)

		console.log(ipAddress.length === 0)
		console.log(event === "")
		console.log(!regex.test(ipAddress))
		
		if (ipAddress.length === 0 || event === "" || !regex.test(ipAddress)){
			
			console.log("pierwszy if")
			setErr(true)
			return true
		} else {
			setErr(false)
			return false
		}
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIpAddress(e.target.value);
		console.log(validateInputField(e.target.value, ipAddress, regex))
		validateInputField(e.target.value, ipAddress, regex)
	};

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log("click")
		console.log(validateInputField("e", ipAddress, regex))
		if(validateInputField("e",ipAddress, regex)){
			console.log("lipa")
		} else {
			console.log("poszło do Api")
			fetchLocation().then((res) => {
				console.log(res)
				if (res) {
					console.log(res?.data)
					setLocationData(res?.data);
				} else {
					return null
				}
			})
		}
		setIpAddress("");
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
