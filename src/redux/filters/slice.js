import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload.name;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;



