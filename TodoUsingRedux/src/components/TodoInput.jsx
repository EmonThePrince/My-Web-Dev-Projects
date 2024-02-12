import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
const TodoInput = () => {
    const [todoMsg, setTodoMsg] = useState("");
    const dispatch = useDispatch();
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
                        dispatch(addTodo(todoMsg));
                        setTodoMsg('')
                    }
                }
            >
                Add
            </button>
        </div>
    );
};

export default TodoInput;