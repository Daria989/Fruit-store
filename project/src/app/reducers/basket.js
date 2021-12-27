import {createSlice} from '@reduxjs/toolkit';

export const basketSlice  = createSlice({
    name:'basket',
    initialState: {
        value: 'Корзина пустая',
    },
    reducers: {
        addCard: (state) => {
            state.value = 'Что-то есть';
        }
    },
});

export const {addCard} = basketSlice.actions;

export default basketSlice.reducer;