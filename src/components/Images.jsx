import React from "react";

const Images = ({ urls, alt }) => {
	return (
		<>
			<img
				src={urls}
				alt={alt}
				className="object-cover h-32 w-10/12 hover:scale-105 rounded-md shadow-md sm:hover:scale-105 duration-300"
			/>
		</>
	);
};

export default Images;
