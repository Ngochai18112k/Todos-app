import { createSlice } from "@reduxjs/toolkit";

var data = JSON.parse(localStorage.getItem('todos'));

const initialState = data ? data : [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state));
            return state;
        },

        removeTodos: (state, action) => {
            var remove = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(remove));
            return remove;
        },

        updateTodos: (state, action) => {
            var update = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    }
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(update));
            return update;
        },

        completeTodos: (state, action) => {
            var complete = state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    }
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(complete));
            return complete;
        }
    }
})

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;