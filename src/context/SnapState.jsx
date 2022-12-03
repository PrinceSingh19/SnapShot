import { useState } from "react";
import SnapContext from "./SnapContext";
import React from "react";

const SnapState = (props) => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchImages = (query) => {
		const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${
			import.meta.env.VITE_ACCESS_KEY
		}`;
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`This is an HTTP error: The status is ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data.results);
				setImages(data.results);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setError(error.message);
				console.log(message);
			});
	};

	return (
		<SnapContext.Provider value={{ images, loading, error, fetchImages }}>
			{props.children}
		</SnapContext.Provider>
	);
};

export default SnapState;
