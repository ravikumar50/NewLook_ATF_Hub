import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
