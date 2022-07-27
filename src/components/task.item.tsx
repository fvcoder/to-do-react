import { TaskI } from "../types"

interface TaskItemProps {
    task: TaskI
    // events
    onDelete?: (id: string) => void
    onUpdate?: (task: TaskI) => void
}

export function TaskItem({ task }: TaskItemProps): JSX.Element {
    return (
        <div>
            <input type="checkbox" checked={task.complete} />
            <p>{task.title}</p>
        </div>
    )
}