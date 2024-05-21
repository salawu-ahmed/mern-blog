import './App.css'
import Layout from './Layout'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Registerpage from './Pages/Register'
import UserContextProvider from './UserContextProvider'
import Createpost from './Pages/Createpost'

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/create" element={<Createpost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
