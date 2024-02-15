import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,resetTodo } from '../features/todoSlice';
const TodoInput = () => {
    const [todoMsg, setTodoMsg] = useState("");
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    let hasEditable = false;
    let editableTodoMsg = '';

    todos.map((todo)=>{
        if(todo.isEditable) {
            hasEditable = true;
            editableTodoMsg = todo.text;
        }
    })


    useEffect(()=>{
        setTodoMsg(editableTodoMsg);
    },[todos])

    
    return (
        <div className='h-[20%] w-full flex justify-center items-center gap-3'>
            <input
                type="text"
                placeholder="Enter your todo..."
                className="px-4 py-2 border rounded-md w-3/4"
                value={todoMsg}
                onChange={
                    (e) => {
                        setTodoMsg(e.target.value)
                    }
                }
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={ 
                    () => {
                        (hasEditable)? dispatch(resetTodo(todoMsg)): dispatch(addTodo(todoMsg));
                        setTodoMsg('')
                    }
                }
            >
                {hasEditable? "Update":"Add"}
            </button>
        </div>
    );
};

export default TodoInput;