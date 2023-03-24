import React from "react"
import '@/App.css'
import Todo from "@components/Todo"
import { useAppSelector } from "@/hooks/useRedux"


const TodoList: React.FC= () => {

    const todos = useAppSelector(state => state.todos.todos)

    return (
        <div id="todos">
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id}  />
            ))}
        </div>
    )
}

export default TodoList
