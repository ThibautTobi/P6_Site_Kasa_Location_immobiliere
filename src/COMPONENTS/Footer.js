import '../CSS/Footer.css' ;
import logo from '../IMG/LOGO Footer.svg';

function Footer (){
    return (
            <footer>
                <div className='display_footer'>
                    <img className="footer_logo"src={logo} alt="logo-Maison"></img>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        )}

export default Footer ;