import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/Homelayout'
import Login from './Pages/Login'

function App() {
  return(
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
