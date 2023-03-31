import '../CSS/Footer.css' ;

import logoFooter from '../IMG/cote_roche.png';

function Footer (){
    return (
            <footer>
                <h2>K<image class="footer_logo"src={logoFooter} alt="logoMaison"></image>sa</h2>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )}

export default Footer ;