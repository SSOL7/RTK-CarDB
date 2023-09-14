import { createSlice } from "@reduxjs/toolkit";
import { add_car } from "./cars-slice";

const form_slice = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        change_name: (state, action) => {
            state.name = action.payload;
        },
        change_cost: (state, action) => {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(add_car, (state) => {
            state.name = "";
            state.cost = 0;
        });
    }
});

export const { change_name, change_cost } = form_slice.actions;
export const form_reducer = form_slice.reducer;