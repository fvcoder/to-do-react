import { TaskI } from "../types"
import { KeyboardEvent } from 'react'
import { useDispatch } from "react-redux"
import { deleteTask, updateTask } from "../store/task.slice"

interface TaskItemProps {
    task: TaskI
}

export function TaskItem({ task }: TaskItemProps): JSX.Element {
    const dispatch = useDispatch()

    const checkboxOnChange = (e: KeyboardEvent<HTMLInputElement>) =>  {
        dispatch(updateTask({ ...task, complete: e.target.checked }))
    }

    return (
        <li>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    defaultChecked={task.complete}
                    checked={task.complete}
                    onChange={checkboxOnChange}
                />
                <label>{task.title}</label>
                <button className="destroy" onClick={() => dispatch(deleteTask(task))}></button>
            </div>
            <input type="text" className="edit" />
        </li>
    )
}