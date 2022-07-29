import { useState, KeyboardEvent, FormEvent } from "react"
import { TaskItem } from "./components/task.item"
import { useTask } from "./hook/useTask"

function App() {
  const [title, setTitle] = useState('')
  const { task, filter, createTask, filterTask } = useTask()

  function handleOnKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    const value = e.target.value
    setTitle(value)
  }

  // Crud 
  function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (title === '') return
    createTask(title)
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
          <span> items left</span>
        </div>
        <ul className="filters">
          <li>
            <a className={filter === "all" ? "selected" : ""} onClick={() => filterTask("all")}>All</a>
          </li>
          <li>
            <a className={filter === "active" ? "selected" : ""} onClick={() => filterTask("active")}>Active</a>
          </li>
          <li>
            <a className={filter === "completed" ? "selected" : ""} onClick={() => filterTask("completed")}>Completed</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
