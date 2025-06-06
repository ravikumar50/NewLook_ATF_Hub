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
        {/* <Route path='/upload' element={</>}></Route>
        <Route path='/download' element={</>}></Route> */}
      </Routes>
    </>
  )
}

export default App
