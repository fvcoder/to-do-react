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
    <>
      <header className="header">
        <h1>To-do list</h1>
        <input type="text" className="new-todo" placeholder="My new task is..." autoFocus onChange={handleOnKeyUp} value={title} />
      </header>
      <main className="main">
        <input type="checkbox" className="toggle-all" id="toggleAll" />
        <label htmlFor="toggleAll" className="">Mark all as complete</label>
        <ul className="todo-list">
          {task.map((x, i) => <TaskItem task={x} key={`task-${i}`} />)}
        </ul>
      </main>
      <footer className="footer">
        <div className="todo-count">
          <strong>{task.length}</strong>
          <span> </span>
          <span>items</span>
          <span>left</span>
        </div>
        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
