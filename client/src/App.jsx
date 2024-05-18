import './App.css'
import Layout from './Layout'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Registerpage from './Pages/Register'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
      </Route>
    </Routes>
  )
}

export default App
