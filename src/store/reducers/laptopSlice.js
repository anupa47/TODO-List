import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    price: 200,
    spec: {
        cpu: 'i5',
        gen: '10th',
        ram: '8GB',
        hdd: '2TB'
    }
}]

const laptopSlice = createSlice({
    name: 'laptop',
    initialState,
    reducers: {
        addLaptop: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (price, cpu, gen, ram, hdd) => {
                return {
                    payload: {
                        id: nanoid(),
                        price,
                        spec: {
                            cpu,
                            gen,
                            ram,
                            hdd
                        }
                    }
                }
            }
        }
    }
})

export const { addLaptop } = laptopSlice.actions

export default laptopSlice.reducer