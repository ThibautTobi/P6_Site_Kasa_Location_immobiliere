import { useState } from 'react';
//import { useEffect } from 'react';
//import flecheBas from '../IMG/Vector-fleche.svg';           
//import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';   
import flecheGauche from '../IMG/Vector_gauche.svg';
import flecheDroite from '../IMG/Vector_droite.svg';
import {data} from '../Data/Data';
import etoile from '../IMG/Etoile.svg';
import etoile_active from '../IMG/Etoile_active.svg';
import '../CSS/Fiche.css';
import { useParams } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'; est ce que c'est mieux ?
import { Navigate } from 'react-router-dom';
import Collapses from '../COMPONENTS/Collapses';

function Fiche (){
    //const navigate = useNavigate();
    const {id}  = useParams();
    console.log(id);
////////////////////////////////////////////////////////////// a voir 
    const dataFiche = data.find(e => id === e.id);
    console.log(dataFiche);
    if (dataFiche === undefined){ 
        return <Navigate to="/"/> ;
    };
    // useEffect(() => {
    //     if (dataFiche === undefined) {
          
    //         navigate("/"); ou  (navigate("/"),{replace : true})
    //     }
    //   }, []);

   
    console.log(dataFiche);

function Slideshow(props){
    //console.log(props);
    //console.log(props.pictures[0]);
    //console.log(props.pictures[+1]);
    const [numb,setNumb] = useState(0);
    //const [changeImg,setChangeImg] = useState(props.pictures[0]);
    //const [activeIndex,setActiveIndex] = useState(0);

    const length = dataFiche.pictures.length ;

//     const updateIndex = (newIndex) =>{
//        newIndex >= props.pictures ? newIndex = 0 : setActiveIndex(newIndex);
//        console.log(newIndex);
//     };

// useEffect(()=>{
//     const interval = setInterval(()=>{
//         updateIndex(length !== activeIndex ?  activeIndex + 1 : newIndex);},5000);

//         return (() => {
//             if (interval) {
//                 clearInterval(interval);
//               }
//         }
//         )
//     }, [activeIndex]);



    /* en cours de devellopement */
    // function changeImgAuto (){ 
        // console.log(length);
    // if (length > 0 ){
        // setInterval(() => {
        //     setChangeImg( props.pictures[0] + 1 )
        // }, 5000)
    //}
// };
    //     setInterval(() => {
    //         setChangeImg(props.pictures[+1])
    //     }, 5000)
    // ;
        //console.log(changeImg);
    // function changeImgAuto (){ 
    // setInterval(() => {
    //     setChangeImg(props.pictures[+1])
    //     console.log(changeImg);
    // }, 5000)};
    

    ////////////////////////////// a tester changement d'image auto
    // const changeImage = () => {
    //     const [image, setImage] = useState(dataFiche.pictures);
      
    //     useEffect(() => {
    //         //Implementing the setInterval method
    //         const interval = setInterval(() => {
    //             setImage(dataFiche.pictures.length + 1);
    //         }, 1000);
      
            //Clearing the interval
        //     return () => clearInterval(interval);
        // }, [image]);
      
        // return <h1>{}</h1>;
    //};

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
                {/* <img className={"fiche_carrousel_img_active"} src={changeImgAuto} alt="photos"></img> */}
            {/* version de base sans changement de page dynamique */}
            {props.pictures.map((element,index) =>
            <img className={"fiche_carrousel_img "+(numb === index ? "active" : "" )} key={index} src={element} alt="photos"></img>
            )}
            </div>
            <div className={(length === 1 ? 'fiche_carrousel_cadre_none' :'fiche_carrousel_cadre')}>
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
                <img src={(dataFiche.rating < 1 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                <img src={(dataFiche.rating < 2 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                <img src={(dataFiche.rating < 3 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                <img src={(dataFiche.rating < 4 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                <img src={(dataFiche.rating < 5 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
            </div>                        
        )
   };
//    function infos (){




    //      function ChangeStyle () {

    //         const [open,setOpen] = useState(false);
    //         const [fleche,setFleche]= useState(flecheBas);
    //         //const [show,setShow] = useState()
    //         const [style, setStyle] = useState("p_show");

    //     open === false ? setOpen(true) : setOpen(false);
    //     // style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
    //     open === true ?setStyle("p_show_active") && setFleche(flecheHaut): setStyle("p_show") && setFleche(flecheBas);
    //     // fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
    //     // open === true ? setFleche(flecheHaut) : setFleche(flecheBas) ;

        function Equipements (){

        return dataFiche.equipments.map((element,index)=>
        <ul>
            <li key={index}>{element}</li>
        </ul>
        )
    };

         

        //  return (
        //     <div className='infos'>
        //         <div className='infos_display'>
        //             <div className='infos_plus' onClick={ChangeStyle}>description
        //                 <img src={fleche} alt='fleche'></img>
        //             </div>
        //             <div className='propos_div_des_show'> 
        //                 <p className={style}>{dataFiche.description}</p>
        //             </div>
        //         </div>
        //         <div className='infos_display'>
        //             <div className='infos_plus' onClick={ChangeStyle}>equipements
        //                 <img src={fleche} alt='fleche'></img>
        //             </div>
        //             <div className='propos_div_des_show'>
        //                 <p className={style}>{Equipements()}</p>
        //             </div>
        //         </div>
        //     </div>
        //  )
        // };
    


        const titre1 = 'description';
        const titre2 = 'equipement';
return (
        <section className='fiche'>
            <Slideshow pictures={dataFiche.pictures} />
            <div className='fiche_infos'>
                <div className='fiche_infos_gauche'>
                        <h2>{dataFiche.title}</h2>
                        <p>{dataFiche.location}</p>
                        <div className='fiche_infos_tag'>
                        {Tags()}
                        </div>
                </div>       
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
            <div className='display_infos'>
                <div className='display_infos_width'>
                    {Collapses(dataFiche.id,titre1,dataFiche.description)}
                </div>
                <div className='display_infos_width'>
                    {Collapses(dataFiche.id,titre2,Equipements())} 
                </div>
                {/* {Collapses(dataFiche.id,titre1,dataFiche.description)}
                {Collapses(dataFiche.id,titre2,dataFiche.description)}   */}
            </div>
            {/* <div className='infos'>
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
            </div> */}
        </section>  
   )
};

export default Fiche;