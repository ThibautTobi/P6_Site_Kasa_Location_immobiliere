import { useState } from 'react';
import flecheBas from '../IMG/Vector-fleche.svg';           
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';   
import flecheGauche from '../IMG/Vector_gauche.svg';
import flecheDroite from '../IMG/Vector_droite.svg';
import {data} from '../Data/Data';
import etoile from '../IMG/Etoile.svg';
import etoile_active from '../IMG/Etoile_active.svg';
import '../CSS/Fiche.css';
import { useParams } from 'react-router-dom';

function Fiche (){

    const {id}  = useParams();
    //console.log(id);
    const dataFiche = data.find(e => e.id === id);
    //console.log(dataFiche);

    const [style, setStyle] = useState("p_show");
    const [fleche,setFleche]= useState(flecheBas);
    // const [open,setOpen] = useState(0);

    const changeStyle = (e) => {
        //console.log(e);
        style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
        fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
};


 // intégré dans un fonction Carrousel le composant SlideShow 
function Slideshow(props){
    // console.log(props);
    const [numb,setNumb] = useState(0);

    const length = dataFiche.pictures.length ;

    // function changeImgAuto (){

    // };

    function handleClicPrev (){    
        const prev = numb - 1;
        setNumb(prev < 0 ? length-1 : prev);
    };

    function handleClicNext (){
        const next = numb + 1;
        setNumb(next >= length ? 0 : next);
    };

    return (
        <div className="fiche_carrousel"> 
            <div className='fiche_carrousel_cadre'>
            {props.pictures.map((element,index) =>
            <img className={"fiche_carrousel_img "+(numb === index ? "active" : "" )} key={index} src={element} alt="photos"></img>
            )}
            </div>
            <div className='fiche_carrousel_cadre'>
                <div className='fiche_carrousel_fleche'>   
                    <img className="fiche_carrousel_flecheGauche" src={flecheGauche} alt='fleche gauche' onClick={handleClicPrev}></img>
                    <img className="fiche_carrousel_flecheDroite" src={flecheDroite} alt='fleche droite'onClick={handleClicNext}></img>
                </div> 
                <p className='fiche_carrousel_num'>{numb + 1}/{length}</p>
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
    
   function Rating (){

        return (
            <div className='fiche_infos_rating'>
                <img src={(dataFiche.rating < 1 ? etoile : etoile_active)} alt='etoile' ></img>
                <img src={(dataFiche.rating < 2 ? etoile : etoile_active)} alt='etoile' ></img>
                <img src={(dataFiche.rating < 3 ? etoile : etoile_active)} alt='etoile' ></img>
                <img src={(dataFiche.rating < 4 ? etoile : etoile_active)} alt='etoile' ></img>
                <img src={(dataFiche.rating < 5 ? etoile : etoile_active)} alt='etoile' ></img>
            </div>                        
        )
   };

    function Equipements (){

        return dataFiche.equipments.map((element,index)=>
        <ul>
            <li key={index}>{element}</li>
        </ul>
        )
    };

return (
        <section className='fiche'>
            <Slideshow pictures={dataFiche.pictures} />
            <div className='fiche_infos'>
                {/* {infosGauche} */}
                <div className='fiche_infos_gauche'>
                        <h2>{dataFiche.title}</h2>
                        <p>{dataFiche.location}</p>
                        <div className='fiche_infos_tag'>
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
                    {Rating()} 
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