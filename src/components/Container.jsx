import React, { useEffect } from "react";
import { getImages } from "../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";

const Container = ({ searchTerm }) => {
	const { error } = useSelector((state) => state.images);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getImages(searchTerm));
	}, [searchTerm]);

	if (error) {
		return <Error error={error} />;
	}
	return (
		<div className=" mx-auto my-4 w-4/5">
			<div className="uppercase col-span-full text-center font-bold font-cursive text-xl ">
				{searchTerm} PICTURES
			</div>
			<Gallery />
		</div>
	);
};

export default Container;
