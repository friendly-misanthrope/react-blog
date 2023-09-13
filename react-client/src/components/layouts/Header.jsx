import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const Header = () => {
  const { width } = useContext(DataContext)
  
  return (
    <header className="header">
      <h1>React JS Blog</h1>
      {
        width < 768 ? <FaMobileAlt /> :
          width < 992 ? <FaTabletAlt />
          : <FaLaptop />
      }
    </header>
  );
}

export default Header;
