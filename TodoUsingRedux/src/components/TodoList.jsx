import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';
const TodoList = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center">
            <ul className="w-full md:w-[90%] mt-4">
                {
                    todos.map(todo => (
                        <li key={todo.id} className="flex items-center justify-between bg-blue-400 shadow-md p-2 mb-2 rounded-xl">
                            <span className="text-xl">{todo.text}</span>
                            <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                                onClick={()=>{
                                    dispatch(removeTodo(todo.id))
                                }}
                            >
                                Delete
                            </button>
                        </li>
                        )
                    )
                }
            </ul>
        </div>

    )
};

export default TodoList;
