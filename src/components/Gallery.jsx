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
		<div className=" grid w-full sm:grid-cols-3 md:grid-cols-3  gap-x-4 gap-y-4 mt-4 mx-auto sm:w-full  ease-in-out duration-500 pb-12">
			{imageRender}
		</div>
	);
};

export default Gallery;
