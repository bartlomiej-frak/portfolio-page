import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, changeSearchTag } from './slices/items.Slice';

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export { store, changeSearchTag };
