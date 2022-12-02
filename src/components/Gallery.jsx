import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Images from "./Images";
import { getImages } from "../redux/imageSlice";
import Loading from "./Loading";

const Gallery = ({ searchTerm }) => {
	const { images, loading, error } = useSelector((state) => state.images);

	const imageRender = images.map((img) => {
		return (
			<div key={img.id} className="flex justify-center items-center">
				<Images urls={img.urls.small} alt={img.alt_description} />
			</div>
		);
	});
	if (error) {
		return <Error error={error} />;
	} else if (loading) {
		return (
			<div className="flex justify-center items-center">
				<Loading />
			</div>
		);
	}
	return (
		<div className=" grid sm:grid-cols-3 md:grid-gap-2 gap-1 space-x-2 space-y-2 mt-4 mx-auto sm:w-11/12 ease-in-out duration-500 pb-12">
			{imageRender}
		</div>
	);
};

export default Gallery;
