import { useEffect, useState } from "react";
import { getImages } from "./redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
	const dispatch = useDispatch();
	const { images, loading } = useSelector((state) => state.images);

	useEffect(() => {
		//dispatch(getImages());
	}, []);

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello World!{images.length}</h1>
		</div>
	);
}

export default App;
