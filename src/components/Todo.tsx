import React from "react"
import '@/App.css'
import { ITodo } from "@my-types/index"
import { CSSTransition, SwitchTransition } from 'react-transition-group'


interface TodoProps {
    todo: ITodo
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const Todo: React.FC<TodoProps> = ({ todo, setTodos }) => {
    const [isBody, setIsBody] = React.useState<boolean>(false)
    const [isHover, setIsHover] = React.useState<boolean>(false)

    const todoBodyRef = React.useRef<HTMLDivElement>(null)

    function doHover() {
        setIsHover(true)
    } 

    function undoHover() {
        setIsHover(false)
    }

    function completeTodo(todo: ITodo, e: React.MouseEvent<HTMLButtonElement>): void {
        e.stopPropagation()

        setTodos((prev) =>
            prev.map((currTodo) => {
                if(currTodo.id === todo.id) {
                    currTodo.completed = true
                }

                return currTodo
            })
        )

    }

    function deleteTodo(todo: ITodo, e: React.MouseEvent<HTMLButtonElement>): void {
        e.stopPropagation()

        setTodos((prev) =>
            prev.filter((currTodo) => todo.id !== currTodo.id)
        )
    }

    function toggleTodoBody(): void {
        setIsBody((prev) => !prev)
    }

    return (
        <>
        
        <SwitchTransition mode="out-in">

            <CSSTransition
                timeout={500}
                nodeRef={todoBodyRef}
                key={isBody ? 'body' : 'cover'}
                classNames={'todo-block__body'}
                mountOnEnter
                unmountOnExit
            >
                {isBody 


                ? <div 
                    className={`todo-block__body`}
                    onClick={toggleTodoBody}
                    ref={todoBodyRef}
                >
                    <p className='todo-body'>{todo.body}</p>
                </div>




                : 
                <div 
                    title={`click on it to see it's body`}
                    className={isHover 
                        ? todo.completed
                        ? `todo completed`
                        : `todo not-completed`
                        : `todo`}
                    onMouseEnter={doHover}
                    onMouseLeave={undoHover}
                    onClick={toggleTodoBody}
                    key={todo.id}
                >
                    <h2 className='todo-title'>{todo.title}</h2>
                    <div className='todo-buttons'>
                        <div className='todo-buttons__inner'>
                            {
                                todo.completed 
                                ? <button onClick={(e) => deleteTodo(todo, e)} className='delete-btn'>Delete</button>
                                : <button onClick={(e) => completeTodo(todo, e)} className='complete-btn'>Complete</button>
                            }
                            <span className={isHover 
                            ? `todo-completed-hover` 
                            : todo.completed 
                            ? `todo-completed-completed`
                            : `todo-completed-not-completed`}
                            >{todo.completed ? `Completed` : `Not completed`}</span>
                        </div>
                    </div>
                </div>
            }

                
            </CSSTransition>

        </SwitchTransition>
        </>
    )
}


export default Todo
