import { configureStore } from '@reduxjs/toolkit'
import { loadState } from './localstorage.state';
import { tastS } from './task.slice'

const store = configureStore({
    reducer: {
        [tastS.name]: tastS.reducer
    },
    preloadedState: loadState()
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch