import { useState, KeyboardEvent, FormEvent, useEffect } from "react"
import { TaskItem } from "./components/task.item"
import { TaskI } from "./types"

function App() {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState<TaskI[]>([])

  // Load from LocalStorage
  useEffect(() => {
    const db = localStorage.getItem('task') || undefined
    if (db) {
      setTask(JSON.parse(db))
    }
  }, [])

  function handleOnKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    const value = e.target.value
    setTitle(value)
  }

  // Crud 
  function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (title === '') return
    const newTask = {
      id: Date.now(),
      title,
      complete: false
    }

    const oldTask = [...task]
    oldTask.unshift(newTask)

    localStorage.setItem('task', JSON.stringify(oldTask))
    setTask(oldTask)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input type="text" placeholder="My task..." autoFocus onChange={handleOnKeyUp} value={title} />
        <button  type="submit">Create Task</button>
      </form>
      <div>
        {task.map((x, i) => <TaskItem task={x} key={`task-${i}`} />)}
      </div>
    </div>
  )
}

export default App
