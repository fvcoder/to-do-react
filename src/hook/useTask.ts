import { useEffect, useState } from "react"
import { TaskI } from "../types"

export function useTask() {
    const [task, setTask] = useState<TaskI[]>([])

    useEffect(() => {
        const db = localStorage.getItem('task') || undefined
        if (db) {
            setTask(JSON.parse(db))
        }
    }, [])


    function createTask(title: string): void {
        const newTask = {
            id: Date.now(),
            title,
            complete: false
        }
        const oldTask = [...task]
        oldTask.unshift(newTask)

        localStorage.setItem('task', JSON.stringify(oldTask))
        setTask(oldTask)
    }

    return {
        task,
        createTask
    }
}