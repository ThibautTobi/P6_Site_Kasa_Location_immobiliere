import { Link } from 'react-router-dom'
//import logo from ""
import "../CSS/Banner.css";

function Banner (){
    return (
            <header>
                <h1>Kaza</h1>
                <nav className="banner_nav">
                  <Link className="banner_nav_acc">Accueil</Link>
                  <Link className="banner_nav_Pro">A Propos</Link>      
                </nav>    
            </header>
            )

};

/*
function navigation (){
    return(
        <nav>
            <Link to="/Home">Accueil</Link>
            <Link to="/A_Propos">A Propos</Link>
        </nav>
    )
};
*/
export default Banner;

//export default navigation

