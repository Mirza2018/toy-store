
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Pages/ShearPages/Navber/Navber'
import Home from './Pages/Home/Home/Home'
import Footer from './Pages/ShearPages/Footer/Footer'

function App() {


  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
