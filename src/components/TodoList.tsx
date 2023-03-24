import React from "react"
import '@/App.css'
import { ITodo } from "@my-types/index"
import Todo from "@components/Todo"


interface TodoListProps {
    todos: ITodo[]
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

    return (
        <div id="todos">
            {todos.map((todo) => (
                <Todo setTodos={setTodos} todo={todo} key={todo.id}  />
            ))}
        </div>
    )
}

export default TodoList
