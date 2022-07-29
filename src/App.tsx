import { useDispatch } from "react-redux"
import { TaskInput } from "./components/task.input"
import { TaskItem } from "./components/task.item"
import { useAppSelector } from "./hook/store"
import { setFilterTask } from "./store/task.slice"
import { TaskI } from "./types"

function App() {
  const dispatch = useDispatch()
  const task = useAppSelector(x => x.task.task) as TaskI[]
  const filter = useAppSelector(x => x.task.filter)
  return (
    <>
      <header className="header">
        <h1>To-do list</h1>
        <TaskInput />
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
            <a className={filter === "all" ? "selected" : ""} onClick={() => dispatch(setFilterTask("all"))}>All</a>
          </li>
          <li>
            <a className={filter === "active" ? "selected" : ""} onClick={() => dispatch(setFilterTask("active"))}>Active</a>
          </li>
          <li>
            <a className={filter === "completed" ? "selected" : ""} onClick={() => dispatch(setFilterTask("completed"))}>Completed</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
