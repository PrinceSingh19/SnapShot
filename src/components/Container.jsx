import React, { useContext, useEffect } from "react";
import Gallery from "./Gallery";
import Error from "./Error";
import SnapContext from "../context/SnapContext";

const Container = ({ searchTerm }) => {
	const { images, error, fetchImages } = useContext(SnapContext);
	useEffect(() => {
		fetchImages(searchTerm);
	}, [searchTerm]);

	if (error) {
		return <Error error={error} />;
	}
	return (
		<div className=" mx-auto my-4 w-4/5 flex flex-col justify-center items-center">
			<div className="uppercase col-span-full text-center font-bold font-cursive text-xl text-slate-300 ">
				{searchTerm} PICTURES
			</div>
			{images.length > 0 ? (
				<Gallery />
			) : (
				<h1 className="text-xl mt-16 text-slate-300 capitalize">
					No images found... for {searchTerm}
				</h1>
			)}
		</div>
	);
};

export default Container;
