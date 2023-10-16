import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 9,
    computer: [4,56]
}

const reducerGen = (key = 'number', operator = '+') => {
    if (operator === '+') {
        return (state, action) => {
            state[key] += action.payload
        }
    } else if (operator === '-') {  
        return (state, action) => {
            state[key] -= action.payload
        }
    }
} 

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: reducerGen(),
        decrement: reducerGen('number', '-')
    }

})

export const numberSliceSelector = (store) => store.numberSlice
export const { increment, decrement } = numberSlice.actions

export default numberSlice.reducer