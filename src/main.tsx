import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'todomvc-app-css/index.css'
import { Provider } from 'react-redux' 
import store from './store'
import debounce from 'debounce'
import { saveState } from './store/localstorage.state'

store.subscribe(debounce(() => {
  saveState(store.getState());
}, 100))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
