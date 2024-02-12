import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            const todoIdToRemove = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoIdToRemove);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
