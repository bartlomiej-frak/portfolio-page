import { createSlice } from '@reduxjs/toolkit';
import works from '../../data/works';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        searchTerm: '',
        data: works,
    },

    reducers: {
        changeSearchTag(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { changeSearchTag } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
