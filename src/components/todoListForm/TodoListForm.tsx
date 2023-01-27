// React
import { useState, ChangeEvent, useRef } from 'react'

// Redux
import { useDispatch } from 'react-redux';
import { addTodoItems } from '../../redux/todo/todoListSlice';

// interfaces
import { TodoItems } from '../../models/todoInterface';


export default function TodoListForms() {

    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();


    function handleClick(e : ChangeEvent<EventTarget>) : void {
        e.preventDefault()
        
        const todoItem = {
            id : Math.floor(10*1000*Math.random()),
            label : inputRef !== null ? inputRef.current!.value : ""
            
        }

        dispatch(addTodoItems(todoItem));
        inputRef.current!.value = "";
    }

    return (
        <div>
            <form onSubmit={e => handleClick(e)}>
                <input
 
                placeholder="todo..."
                ref={inputRef}
                />
                <button>submit</button>
            </form>
        </div>
    )
}