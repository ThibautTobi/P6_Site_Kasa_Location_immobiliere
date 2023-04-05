import { useState } from 'react';
import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
import fleche from '../IMG/Vector-fleche.svg';


function Propos (){



    const [style, setStyle] = useState("p_modale");

    const changeStyle = () => {  
        
            setStyle("p_modale_active");
            // if(setStyle("p_modale_active")){
            //     setStyle("p_modale");
            // }
    };
        
     console.log("click");
// jouer avec les etats usestate attention etats independant faire condition si ceci est egal a ceci s'afficher 


    //  function handleClickShow (e){
    //      e.preventDefault();
         
        //  const changeStyle = () => {  setStyle("p_modale_active") };
        
        //     //add classlist toogle "active"
        //  console.log("click");
        

  //   };

/*
  const [style, setStyle] = useState(".p_modale");
  
  const changeStyle = () => {
  
    setStyle(".p_modale:active");
  };
*/


    const engagements = 
/** si je click je return une div avec le paragraphe **/
            <div className='propos_div'>
                {/* <div className='propos_div_des' onClick={changeStyle,(1)}>Fiabilité 
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style ?block 1 : }>Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div> */}
                <div className='propos_div_des' onClick={changeStyle}>Respect
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style}>La bienveillance fait partie des valeurs fondatrices de Kasa.
                     Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className='propos_div_des' onClick={changeStyle}>Service
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                     N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className='propos_div_des' onClick={changeStyle}>Responsabilité
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
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