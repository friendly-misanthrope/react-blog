import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const Dashboard = (props) => {
  return (
    <main>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Dashboard;