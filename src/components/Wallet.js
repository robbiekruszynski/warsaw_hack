// Importing modules
import React, { useState } from "react";
import { ethers } from "ethers";
import Button from '@mui/material/Button';

// import "./App.css";


function WalletConnect() {

 new ethers.BrowserProvider(window.ethereum)

// usetstate for storing and retrieving wallet details
const [data, setdata] = useState({
	address: "",
	Balance: null,
});

// Button handler button for handling a
// request event for metamask
const btnhandler = () => {

	// Asking if metamask is already present or not
	if (window.ethereum) {

	// res[0] for fetching a first wallet
	window.ethereum
		.request({ method: "eth_requestAccounts" })
		.then((res) => accountChangeHandler(res[0]));
	} else {
	alert("install metamask extension!!");
	}
};

// getbalance function for getting a balance in
// a right format with help of ethers
const getbalance = (address) => {

	// Requesting balance method
	window.ethereum
	.request({
		method: "eth_getBalance",
		params: [address, "latest"]
	})
	.then((balance) => {
		// Setting balance
		setdata({
		Balance: ethers.formatEther(balance),
		});
	});
};

// Function for getting handling all events
const accountChangeHandler = (account) => {
	// Setting an address data
	setdata({
	address: account,
	});

	// Setting a balance
	getbalance(account);
};

return (
	<div>	
		<Button onClick={btnhandler} variant="primary">
			Wallet
		</Button>
	</div>
);
}

export default WalletConnect;