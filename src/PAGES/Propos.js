//import { useState } from 'react';
import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
//import flecheBas from '../IMG/Vector-fleche.svg';
//import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';
//import {dataPropos} from '../Data/DataAPropos';
import Collapses from '../COMPONENTS/Collapses';
import '../CSS/Collapses.css';

function Propos (){
    //const [style, setStyle] = useState("p_show");
    //const [fleche,setFleche]= useState(flecheBas);
    //const [open,setOpen] = useState(0);

/****************************  bonne version sauf que l'on n'ouvre pas plusieurs en méme temps */
            // if( open === id ){
            //     setOpen(id);
            //     console.log('click');
            // }else{
            //     setOpen(id);
            //     console.log('click cache');
            // }
    //};


/** */
    const dataPropos = [
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


    // function Collapses (id,name,description){

    //     const [open,setOpen] = useState(false);
    //     const [fleche,setFleche]= useState(flecheBas);
    //     //const [show,setShow] = useState()
    //     const [style, setStyle] = useState("p_show");

    //          function ChangeStyle () {
    //         open === false ? setOpen(true) : setOpen(false);
    //         // style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
    //         open === true ?setStyle("p_show_active") && setFleche(flecheHaut): setStyle("p_show") && setFleche(flecheBas);
    //         // fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
    //         // open === true ? setFleche(flecheHaut) : setFleche(flecheBas) ;
    //          };

    // return (
    //                 <div className='propos_div' id={id} key={id}>
    //                     <div className='propos_div_des' onClick={ChangeStyle}>
    //                         {name}
    //                         <img src={fleche} alt='fleche'></img>
    //                     </div>
    //                     <div className={'propos_div_des_show '}>
    //                         <p className={style}>
    //                         {description}
    //                         </p>
    //                     </div>
    //                 </div>
    //                 )
    // };


    return (
        <div className='propos'>
            <div className='banner'>
                <img src={paysage_montagne} className='banner_montagne' alt='montagne'></img>
            </div>
            <div className="propos_div">
                <div className='propos_div_width'>
                    {Collapses(dataPropos[0].id,dataPropos[0].name,dataPropos[0].description)}
                </div>
                <div className='propos_div_width'>
                    {Collapses(dataPropos[1].id,dataPropos[1].name,dataPropos[1].description)}  
                </div>
                <div className='propos_div_width'>
                    {Collapses(dataPropos[2].id,dataPropos[2].name,dataPropos[2].description)}
                </div>
                <div className='propos_div_width'>
                    {Collapses(dataPropos[3].id,dataPropos[3].name,dataPropos[3].description)}
                </div>
                {/* {Collapses(dataPropos[0].id,dataPropos[0].name,dataPropos[0].description)}
                {Collapses(dataPropos[1].id,dataPropos[1].name,dataPropos[1].description)}
                {Collapses(dataPropos[2].id,dataPropos[2].name,dataPropos[2].description)}
                {Collapses(dataPropos[3].id,dataPropos[3].name,dataPropos[3].description)} */}
            </div>
        </div>
    )
};
export default Propos;


/********************************** initial qui fonctionne  ouverture unique **************************************/
// function Collapses (id){

//     const [open,setOpen] = useState(0);

//         function changeStyle (id) {
//             if( open === id ){
//                 setOpen(id);
//             }else{
//                 setOpen(id);
//             }
//         };
//     return dataPropos.map((element,index)=>
//         <div className='propos_div' key={index}>
//             <div className='propos_div_des' onClick={()=>changeStyle(element.id)}>{element.name} 
//                 <img src={(open === element.id ? flecheHaut : flecheBas ) } alt='fleche'></img>
//             </div>
//             <div className={'propos_div_des_show ' + (open === element.id ? 'p_show_active' : 'p_show')}>
//                 <p className={(open === element.id ? 'p_show_active' : 'p_show')}>{element.description}</p>
//             </div>
//         </div>)
//     };