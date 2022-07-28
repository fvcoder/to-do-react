import { TaskI } from "../types"

interface TaskItemProps {
    task: TaskI
    // events
    onDelete?: (id: string) => void
    onUpdate?: (task: TaskI) => void
}

export function TaskItem({ task }: TaskItemProps): JSX.Element {
    return (
        <li>
            <div className="view">
                <input type="checkbox" className="toggle" checked={task.complete} />
                <label>{task.title}</label>
                <button className="destroy"></button>
            </div>
            <input type="text" className="edit" />
        </li>
    )
}