// Style
import './App.css';

// React
import { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store';
import { setTodoList } from "../../redux/todo/todoListSlice"

// Types
import { TodoItemsType } from '../../models/todoInterface';
import { DataResultType } from '../../models/dataInterface';

// Api
import { todoListItem } from '../../api/todo';

// Components
import TodoListItems from '../../components/todoListItems/TodoListItems';
import TodoListForms from '../../components/todoListForm/TodoListForm';



export default function App() {

    const [todoListData, setTodoListData] = useState<TodoItemsType[]>([]);

    const dispatch = useDispatch();

    const { todoList } = useSelector((state : RootState)=> state.todoList)

    // set todoListSlice from api
    useEffect(() => {
        const items : DataResultType = todoListItem()
        dispatch(setTodoList(items.data));
    }, []);

    // set todoListData state from redux slice
    useEffect(() => {
        if (todoList.length > 0) {
            setTodoListData(todoList);
        }
    }, [todoList]);

    return (
        <div className="container">
            <h1 className='todo-title'>Todo App</h1>
            <ul className='todo-items-holder'>
                {todoListData.length > 0 ?
                    <>
                        {todoListData.map((e : TodoItemsType, i : number) => {
                            return <TodoListItems key={i} data={e} />
                        })}
                    </> : <>
                        loading...
                    </>
                }
            </ul>
            <TodoListForms />
        </div>
    )
}
