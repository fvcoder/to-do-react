import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterT, TaskI, TaskSliceI } from "../types";

const initialState: TaskSliceI  = {
    task: [],
    db: [],
    filter: "all",
}

export const tastS = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (s, p: PayloadAction<string>) => {
            s.db.unshift({
                id: Date.now(),
                title: p.payload,
                complete: false
            })
            if (s.filter === 'all') s.task = s.db
            if (s.filter === 'active') s.task = s.db.filter(x => x.complete === false)
            if (s.filter === 'completed') s.task = s.db.filter(x => x.complete === true)
        },
        updateTask: (s, p: PayloadAction<TaskI>) => {
            const i = s.db.findIndex(x => x.id === p.payload.id)
            if (i === -1) return

            s.db[i] = p.payload

            if (s.filter === 'all') s.task = s.db
            if (s.filter === 'active') s.task = s.db.filter(x => x.complete === false)
            if (s.filter === 'completed') s.task = s.db.filter(x => x.complete === true)
        },
        setFilterTask: (s, p: PayloadAction<filterT>) => {
            s.filter = p.payload
            if (s.filter === 'all') s.task = s.db
            if (s.filter === 'active') s.task = s.db.filter(x => x.complete === false)
            if (s.filter === 'completed') s.task = s.db.filter(x => x.complete === true)
        }
    },
})

export const { addTask, setFilterTask, updateTask } = tastS.actions