import { NavLink } from 'react-router-dom';
import logo from "../IMG/LOGO.svg"
import "../CSS/Header.css";

function Header (){
    return (
            <header>
                <img src={logo} className='logo-maison' alt='logo-maison'></img>
                <nav className="banner_nav">
                  <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined }>Accueil</NavLink>
                  <NavLink to="/Propos" className={({ isActive }) => isActive ? "active" : undefined } >A Propos</NavLink>      
                </nav>    
            </header>
            )
};
export default Header;