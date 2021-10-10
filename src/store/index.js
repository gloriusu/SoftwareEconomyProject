import {configureStore} from "@reduxjs/toolkit";

import cocomo1Slice from './cocomo1-slice';
import cocomo2Slice from "./cocomo2-slice";


const store = configureStore({
    reducer: {
        cocomo1: cocomo1Slice.reducer,
        cocomo2: cocomo2Slice.reducer,
    }
});


export default store;