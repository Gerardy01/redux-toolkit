import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

// interface
import { TodoItems } from '../../models/todoInterface';
interface todoListStateInterface {
    todoList : TodoItems[]
}

const initialState : todoListStateInterface = {
    todoList : []
}



export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoItems: (state, action : PayloadAction<TodoItems>) => {
            state.todoList.push(action.payload);
        },
        setTodoList: (state, action : PayloadAction<TodoItems[]>) => {
            state.todoList = action.payload;
        }
    }
});

export const { addTodoItems, setTodoList } = todoListSlice.actions
export default todoListSlice.reducer