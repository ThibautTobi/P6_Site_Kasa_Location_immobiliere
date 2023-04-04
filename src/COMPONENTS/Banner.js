//import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import logo from "../IMG/LOGO.svg"
import "../CSS/Banner.css";
//import Home from '../PAGES/Home';
//import Propos from '../PAGES/Propos';

function Banner (){
    return (
            <header>
                <img src={logo} alt='logo-maison'></img>
                <nav className="banner_nav">
                  <NavLink className={({ isActive }) => isActive ? "active" : undefined } >Accueil</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active" : undefined } >A Propos</NavLink>      
                </nav>    
            </header>
            )
};

export default Banner;

/*
                <nav className="banner_nav">
                  <Link className="banner_nav_acc">Accueil</Link>
                  <Link className="banner_nav_Pro">A Propos</Link>      
                </nav> 
*/

/*
<NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to={<Home />}>Accueil</NavLink>
<NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to={<Propos />}>A Propos</NavLink> 
*/