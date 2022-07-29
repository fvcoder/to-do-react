import { FormEvent, KeyboardEvent, useState } from "react"
import { addTask } from "../store/task.slice"
import { useDispatch } from "react-redux"

export function TaskInput(): JSX.Element {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    /// crud: Create
    function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'ENTER' ||e.keyCode === 13) {
            if (title === '') return
            dispatch(addTask(title))
            setTitle('')
        }
    }

    return (
        <input
            type="text"
            className="new-todo"
            placeholder="My new task is..."
            autoFocus
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => handleOnKeyDown(e)}
            value={title}
        />
    )
}

