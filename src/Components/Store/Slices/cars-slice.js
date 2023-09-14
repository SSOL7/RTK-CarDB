import { createSlice, nanoid } from "@reduxjs/toolkit";


const cars_slice = createSlice({
    name: "cars",
    initialState: {
        search_term: "",
        data: [],
    },
    reducers: {
        change_search_term: (state, action) => {
            state.search_term = action.payload;
        },
        add_car: (state, action) => {
            // Note: action.payload is object with 2 properties: name, cost
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        remove_car: (state, action) => {
            // Note: action.payload is the id of the car to be removed
            state.data = state.data.filter((car) => car.id !== action.payload);
        },
    }   
});

export const { change_search_term, add_car, remove_car } = cars_slice.actions;

export const cars_reducer = cars_slice.reducer;