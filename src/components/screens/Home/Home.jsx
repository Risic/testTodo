// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import TodoItem from "./item/TodoItem"
import CreateTodoField from "./CreateTodoField/CreateTodoField"

const data = [
    {
        _id: 'sdgxcv4',
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        _id: 'sdgxcv564',
        title: 'Read the book',
        isCompleted: false
    },
    {
        _id: 'sdxcv4',
        title: 'Develop web app',
        isCompleted: false
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todos</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
        </div>
    )
}

export default Home