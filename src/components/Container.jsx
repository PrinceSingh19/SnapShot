import React, { useEffect } from "react";
import { getImages } from "../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";

const Container = ({ searchTerm }) => {
	const { error, images } = useSelector((state) => state.images);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getImages(searchTerm));
	}, [searchTerm]);

	if (error) {
		return <Error error={error} />;
	}
	return (
		<div className=" mx-auto my-4 w-4/5 flex flex-col justify-center items-center">
			<div className="uppercase col-span-full text-center font-bold font-cursive text-xl ">
				{searchTerm} PICTURES
			</div>
			{images.length > 0 ? (
				<Gallery />
			) : (
				<h1 className="text-xl mt-16 text-blue-900 capitalize">
					No images found... for {searchTerm}
				</h1>
			)}
		</div>
	);
};

export default Container;
