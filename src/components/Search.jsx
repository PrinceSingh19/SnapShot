import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "./Container";
import Error from "./Error";
import Loading from "./Loading";

const Search = ({ searchTerm }) => {
	const { error, loading } = useSelector((state) => state.images);
	const { searchInput } = useParams();
	//console.log(searchInput);
	if (error) {
		return <Error error={error} />;
	}
	return (
		<div>
			<Container searchTerm={searchInput} />
		</div>
	);
};

export default Search;
