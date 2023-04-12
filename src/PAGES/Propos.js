import { useState } from 'react';
import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
import flecheBas from '../IMG/Vector-fleche.svg';
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';


function Propos (){


    const [style, setStyle] = useState("p_show");
    const [fleche,setFleche]= useState(flecheBas);
    const [open,setOpen] = useState(0);

    const changeStyle = (id) => {
        
            if( open === id ){
                setOpen(0);
            }else{
                setOpen(id);
            }

            //style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
            //  fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
                

            
            // open === false ? setOpen(true) : setOpen(false);
            // console.log(open);
            // let targetDiv = e.target.id;
            // console.log(targetDiv);
            //let targetSibling = e.target.nextSibling;
            //let targetSiblingGet = e.target.nextSibling.childNodes;

            // let targetSiblingGetTest = e.target.nextSibling.firstChild; ///// donne la balise p
            // console.log(targetSiblingGetTest);
            // console.log(targetSiblingGetTest.id);
            // let targetSiblingGetTestFinal = e.target.nextSibling.firstChild.className; ///// donne la class p
            // console.log(targetSiblingGetTestFinal);
        
           
         // targetSiblingGetTestFinal === "p_modale" ? setStyle("p_modale_active") : setStyle("p_modale");

        //   if ( e.target.id === targetSiblingGetTest.id){ 
        //     console.log("sa marche")
        //     setStyle("p_modale_active") 
        //   }else{
        //     setStyle("p_modale");
          //}
        
        
    };
 ////////////////////////////////////////////////////////////////////////       
 const dataPropos = 
[

    {
    "id":"1",
    "name":"Fiabilité",
    "description":`Les annonces postées sur Kasa garantissent une fiabilité totale.
    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
    },
    {
    "id":"2",
    "name":"Respect",
    "description":`La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
    },
    {
    "id":"3",
    "name":"Service",
    "description":`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
    N'hésitez pas à nous contacter si vous avez la moindre question.`
    },
    {
    "id":"4",
    "name":"Responsabilité",
    "description":`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
    chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
     cela permet à nos équipes de vérifier que les standards sont bien respectés.
    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    }
];

function Collapses (){

    return dataPropos.map((element,index)=>
            <div className='propos_div' key={index}>
                <div className='propos_div_des' onClick={()=>changeStyle(element.id)}>{element.name} 
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className={'propos_div_des_show ' + (open === element.id ? 'p_show_active' : 'p_show')}>
                    <p className={(open === element.id ? 'p_show_active' : 'p_show')}>{element.description}</p>
                </div>
            </div>
    )
};
//////////////////////////////////////////////////////////////////
    
    return (
        <div className='propos'>
            <div className='banner'>
                <img src={paysage_montagne} className='banner_montagne' alt='montagne'></img>
            </div>
            
            {Collapses()}
        </div>
    )
};

export default Propos;






// const changeStyle = () => {
//     if( style === "p_modale" ){
//         setStyle("p_modale_active");
//     }
//     else{
//         setStyle("p_modale");
//     }
// };

////////////////////////////////////////////// alternative 1

// const Collapses = 
            //<div className='propos_div'>

                {/* <div className='propos_div_des' onClick={changeStyle}>Fiabilité 
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style} id='1' name="fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
                <div className='propos_div_des' id='2' onClick={changeStyle}>Respect   
                    <img src={fleche} alt='fleche' ></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style} id={2}>La bienveillance fait partie des valeurs fondatrices de Kasa.
                     Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div> */}

                {/* <div className='propos_div_des' onClick={changeStyle(2)}>Service
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style} id={2}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                     N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className='propos_div_des' onClick={changeStyle(3)}>Responsabilité
                    <img src={fleche} alt='fleche'></img>
                </div>
                <div className='propos_div_des_modale'>
                    <p className={style} id={3}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                      cela permet à nos équipes de vérifier que les standards sont bien respectés.
                     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div> */}
            //</div>


////////////////////////////////////////////// alternative 2


//  const dataPropos = 
// [

//     {
//     "name":"Fiabilité",
//     "description":`Les annonces postées sur Kasa garantissent une fiabilité totale.
//     Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
//     },
//     {"name":"Respect",
//     "description":`La bienveillance fait partie des valeurs fondatrices de Kasa.
//     Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
//     },
//     {"name":"Service",
//     "description":`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
//     N'hésitez pas à nous contacter si vous avez la moindre question.`
//     },
//     {"name":"Responsabilité",
//     "description":`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
//     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
//      cela permet à nos équipes de vérifier que les standards sont bien respectés.
//     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
//     }
// ];
// console.log(dataPropos);

// function Collapses (){

//     return dataPropos.map((element,index)=>
//             <div className='propos_div' key={index}>
//                 <div className='propos_div_des' onClick={changeStyle}>{element.name} 
//                     <img src={fleche} alt='fleche'></img>
//                 </div>
//                 <div className='propos_div_des_modale'>
//                     <p className={style} id={element.id}>{element.description}</p>
//                 </div>
//             </div>
//     )
// };


        //     console.log(e.target.id);
        //  let aCible = a.nextElementSibling.children
        //  console.log(aCible);
        //   style === "p_modale" ? setStyle("p_modale_active") && setFleche(flecheHaut) : setStyle("p_modale") && setFleche(flecheBas);
         //if (EventTarget.id === 1 ){
        //     style === "p_modale" ? setStyle("p_modale_active") : setStyle("p_modale");
        // }else if (parametre === 2 ){
        //     style === "p_modale" ? setStyle("p_modale_active") : setStyle("p_modale");
        // }else if (parametre === 3 ){
        //     style === "p_modale" ? setStyle("p_modale_active") : setStyle("p_modale");
        // }else if (parametre === 4 ){
        //     style === "p_modale" ? setStyle("p_modale_active") : setStyle("p_modale");
        // }else {
        //     return undefined;
        // };