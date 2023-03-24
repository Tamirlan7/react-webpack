import React from "react"
import './App.css'
import TodoForm from "@components/TodoForm"
import TodoList from "@components/TodoList"


const App: React.FC = () => {

    return (
        <div className="app">
            <div className="container">
                
                <TodoForm />

                <TodoList />

            </div>
        </div>
    )
}


export default App
