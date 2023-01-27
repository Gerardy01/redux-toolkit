// React
import { useState, ChangeEvent } from 'react'

// Redux
import { useDispatch } from 'react-redux';
import { addTodoItems } from '../../redux/todo/todoListSlice';

// interfaces
import { TodoItems } from '../../models/todoInterface';


export default function TodoListForms() {

    const dispatch = useDispatch();

    const [todoInputValue, setTodoInputValue] = useState<string>("");

    function handleClick(e : ChangeEvent<EventTarget>) : void {
        e.preventDefault()

        if (todoInputValue === "") {
            return
        }

        const todoItems : TodoItems = {
            id: 5,
            label: todoInputValue
        }

        dispatch(addTodoItems(todoItems));
        setTodoInputValue("");
    }

    return (
        <div>
            <form onSubmit={e => handleClick(e)}>
                <input
                    placeholder="todo..."
                    value={todoInputValue}
                    onChange={e => setTodoInputValue(e.target.value)}
                />
                <button>submit</button>
            </form>
        </div>
    )
}