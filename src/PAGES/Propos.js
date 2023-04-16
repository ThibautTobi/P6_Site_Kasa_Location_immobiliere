import { useState } from 'react';
import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
import flecheBas from '../IMG/Vector-fleche.svg';
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';
//import {dataPropos} from '../Data/DataAPropos';

function Propos (){
    //const [style, setStyle] = useState("p_show");
    //const [fleche,setFleche]= useState(flecheBas);
    //const [open,setOpen] = useState(0);
    //const [openEtat,setOpenEtat] = useState(false);

    /******** change ********/
    //const changeStyle = (id) => {
        // console.log(open);
        // console.log(openEtat);
        //     if( open === id ){
        //         setOpen(id);
        //         setOpenEtat(true);
        //         console.log('click');
        //         console.log(id);
        //     }else{
        //         setOpen(id);
        //         console.log('click cache');
        //     }
        //  console.log(open);
        //  console.log(openEtat);


    // ajouter value={false} et mettre condition avec un use state
/****************************  bonne version sauf que l'on n'ouvre pas plusieurs en méme temps */
            // if( open === id ){
            //     setOpen(id);
            //     console.log('click');
            // }else{
            //     setOpen(id);
            //     console.log('click cache');
            // }

    //};
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

    function Collapses (props){
    // console.log(props)
        /************************** test refacto collaspe */
    const [open,setOpen] = useState(false);

        function changeStyle () {
           open === false ? setOpen(true) : setOpen(false);
        };
        return (
                <div className='propos_div' id={props.id} key={props.id}>
                    <div className='propos_div_des' onClick={changeStyle}>{props.name}
                        <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
                    </div>
                    <div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
                        <p className={(open === true ? 'p_show_active' : 'p_show')}>
                        {props.description}
                        </p>
                    </div>
                </div>
        )
        };


    return (
        <div className='propos'>
            <div className='banner'>
                <img src={paysage_montagne} className='banner_montagne' alt='montagne'></img>
            </div>
            {Collapses(dataPropos[0])}
            {Collapses(dataPropos[1])}
            {Collapses(dataPropos[2])}
            {Collapses(dataPropos[3])}
        </div>
    )
};

export default Propos;

/********************************** initial qui fonctionne **************************************/
        {/* // return dataPropos.map((element,index)=>
        //         <div className='propos_div' key={index}>
        //             <div className='propos_div_des' onClick={()=>changeStyle(element.id)}>{element.name} 
        //                 <img src={(open === element.id ? flecheHaut : flecheBas ) } alt='fleche'></img>
        //             </div>
        //             <div className={'propos_div_des_show ' + (open === element.id ? 'p_show_active' : 'p_show')}>
        //                 <p className={(open === element.id ? 'p_show_active' : 'p_show')}>{element.description}</p>
        //             </div>
        //         </div>
        // )
    //};   */}







    // <div>
//     <div className='propos_div' id='1'>
//     <div className='propos_div_des' onClick={changeStyle}>Fiabilité
//         <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
//     </div>
//     <div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
//         <p className={(open === true ? 'p_show_active' : 'p_show')}>
//         Les annonces postées sur Kasa garantissent une fiabilité totale.
//         Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
//         </p>
//     </div>
// </div>
    {/* <div className='propos_div' id='2'>
                    <div className='propos_div_des' onClick={changeStyle}>Respect
                        <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
                    </div>
                    <div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
                        <p className={(open === true ? 'p_show_active' : 'p_show')}>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
                    </div>
                </div>
                <div className='propos_div' id='3'>
                    <div className='propos_div_des' onClick={changeStyle}>Service
                        <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
                    </div>
                    <div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
                        <p className={(open === true ? 'p_show_active' : 'p_show')}>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>
                    </div>
                </div>
                <div className='propos_div' id='4'>
                    <div className='propos_div_des' onClick={changeStyle}>Responsabilité
                        <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
                    </div>
                    <div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
                        <p className={(open === true ? 'p_show_active' : 'p_show')}>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards sont bien respectés.
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </div>
                </div>
            </div> */}