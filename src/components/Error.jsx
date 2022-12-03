import React from "react";

const Error = ({ error }) => {
	return (
		<div className="text-center  text-slate-300 mt-20">
			<h1 className="text-xl">{error}</h1>
		</div>
	);
};

export default Error;
