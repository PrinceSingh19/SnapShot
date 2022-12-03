import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
const App = () => {
	const [searchInput, setSearchInput] = useState("");
	return (
		<>
			<div>
				<Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
				<Form searchInput={searchInput} setSearchInput={setSearchInput} />
				<Routes>
					<Route path="/" element={<Container searchTerm="nature" />} />
					<Route path="/nature" element={<Container searchTerm="nature" />} />
					<Route path="/forest" element={<Container searchTerm="forest" />} />
					<Route path="/river" element={<Container searchTerm="river" />} />
					<Route path="/universe" element={<Container searchTerm="universe" />} />
					<Route path="/search/:searchInput" element={<Search />} />
					<Route path="*" element={<h1 className="text-xl text-center mt-20 ">Invalid Url</h1>} />
				</Routes>
			</div>
		</>
	);
};

export default App;
