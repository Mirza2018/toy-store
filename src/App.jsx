
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Pages/ShearPages/Navber/Navber'

function App() {


  return (
    <div>

      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default App
