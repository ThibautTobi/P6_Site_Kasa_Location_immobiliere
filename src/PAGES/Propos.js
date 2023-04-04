import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
import fleche from '../IMG/Vector-fleche.svg';


function Propos (){

    function handleClick (e){
        e.preventDefault();
        
        console.log("click");

    };

    // open Moadel

    // close Modale

    const engagements = 
/** si je click je return une div avec le paragraphe **/
            <div className='propos_div'>
                <div className='propos_div_des' onClick={handleClick}>Fiabilité 
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className='p_modale'>Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
                <div className='propos_div_des' onClick={handleClick}>Respect
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className='p_modale'>La bienveillance fait partie des valeurs fondatrices de Kasa.
                     Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className='propos_div_des' onClick={handleClick}>Service
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className='p_modale'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                     N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className='propos_div_des' onClick={handleClick}>Responsabilité
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className='p_modale'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                      cela permet à nos équipes de vérifier que les standards sont bien respectés.
                     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>

    return (
        <div className='propos'>
            <div className='banner'>
                <img src={paysage_montagne} className='banner_montagne' alt='montagne'></img>
            </div>
            {engagements}
        </div>
    )
};

export default Propos;