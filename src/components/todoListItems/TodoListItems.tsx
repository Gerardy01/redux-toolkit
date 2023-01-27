// Styles
import './todoListItems.css'

// react
import { useEffect, useState } from 'react'

// Types
import { TodoItemsType } from '../../models/todoInterface';



export default function TodoListItems(props : { data : TodoItemsType }) {

    const [todoItemData, setTodoitemData] = useState<TodoItemsType>()

    useEffect(() => {
        setTodoitemData(props.data);
    }, [props.data]);

    return (
        <>
            {
                todoItemData &&
                <li className='todo-list'>
                    <p className='todo-item-number'>{todoItemData.id}</p>
                    <p className='todo-item-label'>{todoItemData.label}</p>
                </li>
            }
        </>
    )
}