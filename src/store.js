import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogs';

const reducers = {
    blogs: blogReducer
}

const store = configureStore({
    reducer: reducers,
    devTools: true,
})

export default store;