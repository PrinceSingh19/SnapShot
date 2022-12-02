import React from "react";

const Error = ({ error }) => {
	return (
		<div className="flex justify-center items-center">
			<h1 className="text-xl">{error}</h1>
		</div>
	);
};

export default Error;
