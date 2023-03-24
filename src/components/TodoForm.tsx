import React from "react"
import '@/App.css'
import { ITodo } from "@my-types/index"
import todoImg from '@assets/todo.jpg'


interface TodoFormProps {
    createTodo: (todo: ITodo) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ createTodo }) => {

    const [todo, setTodo] = React.useState<ITodo>({
        id: 0,
        title: '',
        body: '',
        completed: false
    })


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
        setTodo(prev => ({...prev, [e.target.name] : e.target.value}))
        

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const newTodo: ITodo = {...todo, id: Date.now()}
        createTodo(newTodo)
    }

    return (
        <form id='todo-form' onSubmit={(e) => onSubmit(e)}>
            <div id='todo-form__inner'>

                <div className='todo-img'>
                    <img src={todoImg} alt='todoImg' />
                </div>

                <h1 className='todo-form__title'>Add your Todo!</h1>

                <div className='input-block'>
                    <label>Todo Title</label >
                    <input 
                        type='text' 
                        placeholder='title' 
                        name='title'
                        onChange={(e) => onChange(e)}
                    />
                </div>

                <div className='input-block'>
                    <label>Todo Body</label >
                    <input 
                        type='text' 
                        placeholder='body'
                        name='body'
                        onChange={(e) => onChange(e)} 
                    />
                </div>

                <div className='form-button'>
                    <button type='submit' className='form-btn'>Add</button>
                </div>
            </div>
        </form>
    )
}


export default TodoForm
