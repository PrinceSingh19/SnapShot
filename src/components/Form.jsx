import React from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ searchInput, setSearchInput }) => {
	const navigate = useNavigate();
	const handleChange = (e) => setSearchInput(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${searchInput}`);
	};
	return (
		<form
			className="mt-28 flex justify-center space-x-3 mx-3 md:mx-0 "
			onSubmit={(e) => handleSubmit(e)}
		>
			<input
				type="text"
				placeholder="Search..."
				className="w-full sm:w-1/3 border-2 border-slate-500 focus:border-blue-600 h-12 rounded-md pl-2"
				onChange={handleChange}
				value={searchInput}
			/>

			<button
				type="submit"
				className="bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:ring-offset-1 focus:ring-blue-900 focus:outline-none px-4 rounded-md"
			>
				Search
			</button>
		</form>
	);
};

export default Form;
