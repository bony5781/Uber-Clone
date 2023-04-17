import { createSlice } from "@reduxjs/toolkit";

//initial state of the application
const initialState = {
    origin: null,
    destinatinon : null,
    travelTimeInformation: null
}

//create navSlice
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state,action) => {
            state.origin = action.payload;
        },
        setDestination: (state,action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state,action) => {
            state.travelTimeInformation = action.payload;
        },
    }
})

//exporting actions
export const { setOrigin , setDestination, setTravelTimeInformation} =navSlice.actions;

//exporting selectors(grabbing the data)
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;