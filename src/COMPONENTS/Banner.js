import { NavLink } from 'react-router-dom';
import logo from "../IMG/LOGO.svg"
import "../CSS/Banner.css";

function Banner (){
    return (
            <header>
                <img src={logo} alt='logo-maison'></img>
                <nav className="banner_nav">
                  <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined } >Accueil</NavLink>
                  <NavLink to="/Propos" className={({ isActive }) => isActive ? "active" : undefined } >A Propos</NavLink>      
                </nav>    
            </header>
            )
};

export default Banner;