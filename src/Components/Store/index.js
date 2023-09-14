import { configureStore } from "@reduxjs/toolkit";
import { cars_reducer, add_car, remove_car, change_search_term } from "./Slices/cars-slice";
import { form_reducer, change_name, change_cost } from "./Slices/formslice";

const store = configureStore({
    reducer: {
        cars: cars_reducer,
        form: form_reducer,
    },
    devTools: true,
});

export { store, change_name, change_cost, add_car, remove_car, change_search_term }


