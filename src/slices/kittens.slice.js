import { createSlice } from '@reduxjs/toolkit';

export const kittenSlice = createSlice({
    name: 'kittens',
    initialState: {
        kittens: [],
        kitten: null
    },
    reducers: {
        setkittens: (state, {payload}) => {
            const { kittens } = payload
            state.kittens = kittens
        },

        setkittenById: (state, {payload}) => {
            state.kitten = payload
        },

    }
});

export const { setkittens, setkittenById } = kittenSlice.actions;