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
                isEditable: false,
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            const todoIdToRemove = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoIdToRemove);
        },
        updateTodo: (state,action) => {
            const todoIdToRemove = action.payload;
            state.todos.map(todo => (todo.id === todoIdToRemove)? todo.isEditable = true: todo.isEditable = false);
        },
        resetTodo: (state,action) => {
            const todoMsg = action.payload;
            state.todos.map(todo => {if(todo.isEditable) {
                todo.text = todoMsg
                todo.isEditable = false
            }});
        } 
    },
});

export const { addTodo, removeTodo,updateTodo,resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
