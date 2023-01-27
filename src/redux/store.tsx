import { configureStore } from '@reduxjs/toolkit';

// Reducers
import todoListReducer  from './todo/todoListSlice'



export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch