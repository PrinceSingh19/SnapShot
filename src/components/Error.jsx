import React from "react";

const Error = ({ error }) => {
	return (
		<div className="text-center mt-20">
			<h1 className="text-xl">{error}</h1>
		</div>
	);
};

export default Error;
