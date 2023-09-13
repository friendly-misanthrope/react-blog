import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Dashboard from "../Dashboard"
import { Outlet } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'


const Home = () => {

  const { location } = useContext(DataContext)

  return (
    <main className="home">
      <Header />
      <Nav />
  
      {
        location.pathname === '/' ?
          <Dashboard  />
          :null
      }
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;