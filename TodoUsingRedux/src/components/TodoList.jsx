import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo,updateTodo } from '../features/todoSlice';
const TodoList = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center">
            <ul className="w-full md:w-[90%] mt-4">
                {
                    todos.map(todo => (
                        <li key={todo.id} className={`flex items-center justify-between ${todo.isEditable? "bg-emerald-500":"bg-blue-400"} shadow-md p-2 mb-2 rounded-xl`}>
                            <span className="text-xl">{todo.text}</span>
                            <div>
                            <button className='mr-4 px-2 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 text-sm'
                              onClick={
                                () => {
                                    dispatch(updateTodo(todo.id))
                                }
                              }                              
                            >
                                Select
                            </button>
                            <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                                onClick={()=>{
                                    dispatch(removeTodo(todo.id))
                                }}
                            >
                                Delete
                            </button>
                            </div>
                            
                        </li>
                        )
                    )
                }
            </ul>
        </div>

    )
};

export default TodoList;
