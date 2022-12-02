import { useEffect, useState } from "react";
import { getImages } from "./redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
const App = () => {
	const [searchInput, setSearchInput] = useState("");
	//console.log(searchInput);
	const dispatch = useDispatch();
	const { images, loading } = useSelector((state) => state.images);

	useEffect(() => {
		//dispatch(getImages());
	}, []);

	return (
		<>
			<div className="mt-2">
				<Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
				<Form searchInput={searchInput} setSearchInput={setSearchInput} />
				<Routes>
					<Route path="/" element={<Container searchTerm="nature" />} />
					<Route path="/nature" element={<Container searchTerm="nature" />} />
					<Route path="/forest" element={<Container searchTerm="forest" />} />
					<Route path="/river" element={<Container searchTerm="river" />} />
					<Route path="/universe" element={<Container searchTerm="universe" />} />
					<Route path="/search/:searchInput" element={<Search />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
