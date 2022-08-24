import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '@/modules'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Hello world!</h1>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
