import { useState } from 'react';
//import fleche from '../IMG/Vector-fleche.svg';
import flecheBas from '../IMG/Vector-fleche.svg';           
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';   
import flecheGauche from '../IMG/Vector_gauche.svg';
import flecheDroite from '../IMG/Vector_droite.svg';
//import {data} from '../Data/Data';
//import{resultat} from '../PAGES/Home/resultat';
import etoile from '../IMG/Vector_etoile.png';
import '../CSS/Fiche.css';
//import {changeStyle} from '../COMPONENTS/ChangeStyleShow/changeStyle';

/////////////////////// data de progamation

const dataFiche = 
	{
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	};

function Fiche (){

////// copie temporaire de la function onclick

const [style, setStyle] = useState("p_show");
const [fleche,setFleche]= useState(flecheBas);
// const [open,setOpen] = useState(0);

const changeStyle = (e) => {
    
        console.log(e);

        style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
        fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
};


 // intégré dans un fonction Carrousel le composant SlideShow   
function Slideshow(props){
    console.log(dataFiche)

    const [numb,setNumb] = useState(0);

    const length = dataFiche.pictures.length ;

function handleClicPrev (){
    console.log("prev");
    
    const prev = numb - 1;
    setNumb(prev < 0 ? length-1 : prev);
};

function handleClicNext (){
    console.log("next");
    
    const next = numb + 1;
    setNumb(next >= length ? 0 : next);
};

    return (
        <div className="fiche_carrousel"> 
            <div className='fiche_carrousel_cadre'>
            {props.pictures.map((element,index) =>
            <img className={"fiche_carrousel_img "+(numb === index ? "active" : "" )} key={index} src={element} alt="photos"></img>
            )}
            {/* {Carrousel()} */}
            </div>
            <div className='fiche_carrousel_cadre'>
                <div className='fiche_carrousel_fleche'>   
                    <img className="fiche_carrousel_flecheGauche" src={flecheGauche} alt='fleche gauche' onClick={handleClicPrev}></img>
                    <img className="fiche_carrousel_flecheDroite" src={flecheDroite} alt='fleche droite'onClick={handleClicNext}></img>
                </div> 
                <p className='fiche_carrousel_num'>affichage page 1/4 en dynamique </p>
            </div>   
        </div>
    )
};


function Tags (){

    return dataFiche.tags.map((element,index)=>
        <ul className='fiche_infos_tag'> 
            <li className='fiche_infos_tag_non' key={index}>{element}</li> 
        </ul>
    )
};

// function rating (){

//     const range = [0,1,2,3,4,5];
//     const [style, setStyle] = useState("fiche_infos_plus_rating_etoile");

// setStyle = dataFiche.rating 
// if(dataFiche.rating === 1 ){
//     // setStyle = 'fiche_infos_plus_rating_etoile_active'
//     //element[1,2]
// }else if(dataFiche.rating === 2){
//   element[1,2] setStyle "fiche_infos_plus_rating_etoile"
// }else if(dataFiche.rating === 3){

// }else if(dataFiche.rating === 4){

// }else if(dataFiche.rating === 5){

// };

function Equipements (){

    return dataFiche.equipments.map((element,index)=>
    <ul>
        <li key={index}>{element}</li>
    </ul>
    )
};

    return(
        <section className='fiche'>
            {/* <div className="fiche_carrousel">  */}
            
                {/* <img className="fiche_carrousel_img" src={dataFiche.cover} alt="photos"></img> */}
                <Slideshow pictures={dataFiche.pictures} />
                {/* evenement click prev et next a faire */}
                {/* <div className='fiche_carrousel_fleche'>   
                    <img className="fiche_carrousel_flecheGauche" src={flecheGauche} alt='fleche gauche'></img>
                    <img className="fiche_carrousel_flecheDroite" src={flecheDroite} alt='fleche droite'></img>
                </div>    */}
                
            {/* </div> */}
            <div className='fiche_infos'>
            {/* {infosGauche} */}
                
            <div className='fiche_infos_gauche'>
                    <h2>{dataFiche.title}</h2>
                    <p>{dataFiche.location}</p>
                    <div className='fiche_infos_tag'>
                        {/* <div className='fiche_infos_tag_non'>{dataFiche.tags[0]}</div>
                        <div className='fiche_infos_tag_non'>{dataFiche.tags[1]}</div>
                        <div className='fiche_infos_tag_non'>{dataFiche.tags[2]}</div>
                        <div className='fiche_infos_tag_non'>{dataFiche.tags[3]}</div>
                        <div className='fiche_infos_tag_non'>{dataFiche.tags[4]}</div> */}
                    {Tags()}
                    </div>
                    
            </div>
                    
                {/* {infosDroite} */}
            <div className='fiche_infos_droite'>
                        <div className='fiche_infos_droite_host'>
                            <p>{dataFiche.host.name}</p>
                            <div className='fiche_infos_img'>
                                <img className='fiche_infos_img_picture' src={dataFiche.host.picture} alt='name'></img>
                            </div>
                        </div>
                        <div className='fiche_infos_rating'>
                            {/* incrementer avec le rating */}
                            {/* {rating()} */}
                            <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>                        
                            <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                            <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                            <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                            <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                        </div>
            </div>
            </div>
            {/* {infosClic} */}
            <div className='infos'>
                <div className='infos_display'>
                    <div className='infos_plus' onClick={changeStyle}>description
                        <img src={fleche} alt='fleche'></img>
                    </div>
                    <div className='propos_div_des_show'> 
                        <p className={style}>{dataFiche.description}</p>
                    </div>
                </div>
                <div className='infos_display'>
                    <div className='infos_plus' onClick={changeStyle}>equipements
                        <img src={fleche} alt='fleche'></img>
                    </div>
                    <div className='propos_div_des_show'>
                        <p className={style}>{Equipements()}</p>
                    </div>
                </div>
            </div>
        </section>
   )
};

export default Fiche;


// function flecheDirection (){

//     return(
//         <img className="fiche_carrousel_img" src={data[0].pictures} alt={data.title}>
//             <div>
//                 <img className="fiche_carrousel_flecheGauche" src={flecheGauche} alt='fleche gauche'></img>
//                 <img className="fiche_carrousel_flecheDroite" src={flecheDroite} alt='fleche droite'></img>
//             </div>
//         </img>
// )
// };

// function infosGauche (){

//     return(
//         <div className='fiche_infos_gauche'>
//             <h2>{data[0].title}</h2>
//             <p>{data[0].description}</p>
//             <div className='fiche_infos_tag'>
//             <div className='fiche_infos_tag_non'>cozy</div>
//             <div className='fiche_infos_tag_non'>canal</div>
//             <div className='fiche_infos_tag_non'>parais 10</div>
//             </div>
//         </div>
//     )
// };

// function infosDroite (){

// function rating (){

//     const range = [0,1,2,3,4,5];

//     // const [style, setStyle] = useState("fiche_infos_plus_rating_etoile");

// setStyle = dataFiche.rating 
// if(dataFiche[0].rating === 5 ){
//     // setStyle = 'fiche_infos_plus_rating_etoile_active'
// }

// return (
//     <div className='fiche_infos_rating'>
//         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//     </div>
    
// )

// }


//     return(
//                 <div className='fiche_infos_droite'>
//                     <div className='fiche_infos_droite_host'>
//                         <p>{data[0].host.name}</p>
//                         <div className='fiche_infos_img'>
//                             <img className='fiche_infos_img_picture' src={data[0].host.picture} alt=''></img>
//                         </div>
//                     </div>
//                     <div className='fiche_infos_rating'>
//                         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>                        
//                         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//                         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//                         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//                         <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
//                     </div>
//                 </div>
//     )
// };

// function infosClic (){

//     return(
//         <div className='infos'>
//                 <div className='infos_plus' >description
//                 <img src={fleche} alt='fleche'></img>
//                 </div>
//                 <div className='infos_plus_details'> 
//                     <p className="p_modale">Les annonces postées sur Kasa garantissent une fiabilité totale.
//                     Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
//                 </div>
//                 <div className='infos_plus' >equipements
//                 <img src={fleche} alt='fleche'></img>
//                 </div>
//                 <div className='infos_plus_details'>
//                     <p className="p_modale">Les annonces postées sur Kasa garantissent une fiabilité totale.
//                     Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
//                 </div>
//             </div>
//     )
// };