import { ITodo } from "@my-types/index"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface TodoSliceState {
    todos: ITodo[]
    isLoading: boolean
    error: ''
}

const initialState: TodoSliceState = {
    todos: [],
    isLoading: false,
    error: '',
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    
    reducers: {

        completeTodoAction(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id)
                    todo.completed = true    
                
                return todo
            }) 
        },
        
        deleteTodoAction(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },

        addTodoAction(state, action: PayloadAction<ITodo>) {
            state.todos = [action.payload, ...state.todos]
        }

    }
})


export const { completeTodoAction, deleteTodoAction, addTodoAction } = todoSlice.actions
export default todoSlice.reducer
