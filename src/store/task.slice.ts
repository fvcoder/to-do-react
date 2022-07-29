import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterT, TaskSliceI } from "../types";

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
        },
        setFilterTask: (s, p: PayloadAction<filterT>) => {
            s.filter = p.payload
            if (s.filter === 'all') s.task = s.db
            if (s.filter === 'active') s.task = s.db.filter(x => x.complete === false)
            if (s.filter === 'completed') s.task = s.db.filter(x => x.complete === true)
        }
    }
})

export const { addTask, setFilterTask } = tastS.actions