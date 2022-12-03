import React from "react";
import { useSelector } from "react-redux";
import Images from "./Images";
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
	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <Error error={error} />;
	}
	return (
		<div className=" grid w-full sm:grid-cols-3 md:grid-cols-3  gap-x-4 gap-y-4 mt-4 mx-auto sm:w-full  ease-in-out duration-500 pb-12">
			{imageRender}
		</div>
	);
};

export default Gallery;
