import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const Header = (props) => {
  const { width } = props
  
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
