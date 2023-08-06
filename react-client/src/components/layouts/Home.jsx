import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Dashboard from "../Dashboard"
import { useLocation, Outlet } from 'react-router-dom'

const Home = (props) => {
  const location = useLocation()

  return (
    <main>
      <Nav />
      <Header />
      {
        location.pathname === '/' ?
          <Dashboard />
          :null
      }
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;