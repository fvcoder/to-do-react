import { createContext, PropsWithChildren, useContext } from 'react'
import { useTask } from '../hook/useTask'
import { TaskI } from '../types'

interface TodoListContext {
    task: TaskI[]
    createTask: (title: string) => void
}

const TodoContext = createContext<TodoListContext>(null!)

export const useTodo = useContext(TodoContext)

export function TodoProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
    const task = useTask()
    
    return (
        <TodoContext.Provider value={{ ...task }}>
            {children}
        </TodoContext.Provider>
    )
}