import { useState } from 'react';
import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';
import flecheBas from '../IMG/Vector-fleche.svg';
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';
//import {dataPropos} from '../Data/DataAPropos';

function Propos (){
    //const [style, setStyle] = useState("p_show");
    //const [fleche,setFleche]= useState(flecheBas);
    const [open,setOpen] = useState(0);
    //const [openElse,setOpenElse] = useState(0);
    /******** change ********/
    const changeStyle = (id) => {
        console.log(open);
            if( open === 0 ){
                setOpen(id);
                console.log(open);
            }else if(open === id){
                setOpen(0);
                console.log("c'est le meme");
            }
            else if(open !== id){
                //  setOpenElse(id);
                console.log("c'est pas le meme");
            }
            console.log(open);

            //////////////// test a faire else if !==
            // if( open === id ){
            //     setOpen(0);
            //     console.log('click');
            // }else{
            //     setOpen(id);
            //     console.log('click cache');
            // }


            //style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
            //  fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
    };
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

    function Collapses (){

        return dataPropos.map((element,index)=>
                <div className='propos_div' key={index}>
                    <div className='propos_div_des' onClick={()=>changeStyle(element.id)}>{element.name} 
                        <img src={(open === element.id ? flecheHaut : flecheBas ) } alt='fleche'></img>
                    </div>
                    <div className={'propos_div_des_show ' + (open === element.id ? 'p_show_active' : 'p_show')}>
                        <p className={(open === element.id ? 'p_show_active' : 'p_show')}>{element.description}</p>
                    </div>
                </div>
        )
    };  
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