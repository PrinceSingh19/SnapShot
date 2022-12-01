import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = `https://api.unsplash.com/search/photos?query=coffee&client_id=${
	import.meta.env.VITE_ACCESS_KEY
}`;
const initialState = {
	loading: false,
	images: [],
	error: "",
};
export const getImages = createAsyncThunk("images/getImages", async (_, { rejectWithValue }) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (!response.ok) {
			var error = new Error("Error" + response.status + ":" + response.statusText);
			error.response = response;
			throw error;
		}
		return data.results;
	} catch (err) {
		return rejectWithValue(err.message);
	}
});

export const imagesSlice = createSlice({
	name: "images",
	initialState,
	reducers: {
		getImg: (state, action) => {
			state.images = state.images.concat(action.payload);
		},
	},
	extraReducers: {
		[getImages.pending]: (state) => {
			state.loading = true;
		},
		[getImages.fulfilled]: (state, action) => {
			state.loading = false;
			state.images = action.payload;
			console.log(state.images);
		},
		[getImages.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getImg } = imagesSlice.actions;
export default imagesSlice.reducer;
