import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import Error from "./Error";
import SnapContext from "../context/SnapContext";

const Search = ({ searchTerm }) => {
	const { error } = useContext(SnapContext);
	const { searchInput } = useParams();
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
