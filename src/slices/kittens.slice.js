import { createSlice } from '@reduxjs/toolkit';

export const kittenSlice = createSlice({
    name: 'kittens',
    initialState: {
        kittens: [],
    },
    reducers: {
        setkittens: (state, {payload}) => {
            const { kittens } = payload
            state.kittens = kittens
        }
    }
});

export const { setkittens } = kittenSlice.actions;