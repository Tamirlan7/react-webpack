import React from "react"
import './App.css'
import TodoForm from "@components/TodoForm"
import TodoList from "@components/TodoList"
import { ITodo } from "./types"


const App: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([])

    function createTodo(todo: ITodo) {
        setTodos((prev) => [todo, ...prev])
    }

    return (
        <div className="app">
            <div className="container">
                
                <TodoForm createTodo={createTodo} />

                <TodoList todos={todos} setTodos={setTodos} />

            </div>
        </div>
    )
}


export default App
