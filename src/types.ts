export interface TaskI {
    id: number
    title: string
    complete: boolean
}


export type filterT = 'all' | 'active' | 'completed'

export interface TodoListContext {
  task: TaskI[]
  filter: filterT
  createTask: (title: string) => void
  filterTask: (filter: filterT) => void
}

export interface TaskSliceI {
  task: TaskI[]
  db: TaskI[]
  filter: filterT
}