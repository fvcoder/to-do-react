import { useEffect, useState } from "react"
import { filterT, TaskI, TodoListContext } from "../types"

export function useTask(): TodoListContext {
    const [store, setStore] = useState<TaskI[]>([])
    const [task, setTask] = useState<TaskI[]>([])
    const [filter, setFilter] = useState<filterT>('all')

    useEffect(() => {
        const db = localStorage.getItem('task') || undefined
        if (db) {
            setStore(JSON.parse(db))
            if (filter === 'all' || filter === 'active') setTask(JSON.parse(db))
        }
    }, [])

    // Crud
    function createTask(title: string): void {
        const newTask = {
            id: Date.now(),
            title,
            complete: false
        }
        const oldTask = [...task]
        oldTask.unshift(newTask)

        localStorage.setItem('task', JSON.stringify(oldTask))
        setStore(oldTask)
        if (filter === 'all' || filter === 'active') setTask(oldTask)
    }

    // filters
    function filterTask(filter: 'all' | 'active' | 'completed'): void {
        setFilter(filter)
        if (filter === 'all') setTask(store)
        if (filter === 'active') setTask(store.filter(x => x.complete === false))
        if (filter === 'completed') setTask(store.filter(x => x.complete === true))
    }

    return {
        task,
        filter,
        createTask,
        filterTask
    }
}