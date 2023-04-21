import { useState,useEffect } from 'react';
import flecheGauche from '../IMG/Vector_gauche.svg';
import flecheDroite from '../IMG/Vector_droite.svg';
import {data} from '../Data/Data';
import etoile from '../IMG/Etoile.svg';
import etoile_active from '../IMG/Etoile_active.svg';
import '../CSS/Fiche.css';
import { useParams ,Navigate } from 'react-router-dom';
import Collapses from '../COMPONENTS/Collapses';

function Fiche (){

    const {id}  = useParams();

    /****** je récupére les paramétres qui sont envoyer dans l'url dans une constante  *****/
    const dataFiche = data.find(e => id === e.id);

    /****** je verifie si il y a une erreur avec l'id si il n'existe pas dans les data redirection vers "/"  *****/
    if (dataFiche === undefined){ 
        return <Navigate to="/"/> ;
    };
    /****** je créé le carrousel  *****/
    function Slideshow(props){

        const [numb,setNumb] = useState(0);

        /****** je récupére le nombre de photos  *****/
        const length = dataFiche.pictures.length ;

        /******* je change toute les 5 seconde numb a +1 qui est égal a l'index souhaiter, ensuite
        numb sera comparer au index et qui changera l'etat actif de la class qui sera egale a numb 
        si  numb est egale a le nombre d'index du tableau -1 ( - 1 en plus car le tableau commence a 0 et numb vaux le nombre de pictures)*******/

        useEffect(()=>{
            const interval = setInterval(()=>{
                if(numb <= length -2){
                setNumb(numb +1); 
                }else{
                setNumb(0);
                }
                },5000)

            /*** je réinitialise interval pour éviter des bug au click ***/
            return (() => {        
                        clearInterval(interval);  
                })
            }, [numb, length]);

        /****** au clic sur la fleche précédent  *****/
        function handleClicPrev (){    
            const prev = numb - 1;
            setNumb(prev < 0 ? length-1 : prev);
        };

        /****** au clic sur la fleche suivant  *****/
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
            <div className={(length === 1 ? 'fiche_carrousel_cadre_none' :'fiche_carrousel_cadre')}>
                <div className='fiche_carrousel_fleche'>   
                    <img className="fiche_carrousel_flecheGauche" src={flecheGauche} alt='fleche gauche' onClick={handleClicPrev}></img>
                    <img className="fiche_carrousel_flecheDroite" src={flecheDroite} alt='fleche droite'onClick={handleClicNext}></img>
                </div> 
                <p className='fiche_carrousel_num'>{numb + 1}/{length}</p>
            </div>  
        </div>)
    };

    /*******  je créé ma partie informations ********/
   function Infos (props){

        /****** je créé une liste dynamique des différents tags *****/
        function Tags (props){

            return props.tags.map((element,index)=>
                <ul className='fiche_infos_tag'key={index}> 
                    <li className='fiche_infos_tag_non'>{element}</li> 
                </ul>
            )
        };

        /****** je crée mon rating en dynamique *****/
        function Rating (props){

            return (
                <div className='fiche_infos_rating'>
                    <img src={(props.rating < 1 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                    <img src={(props.rating < 2 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                    <img src={(props.rating < 3 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                    <img src={(props.rating < 4 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                    <img src={(props.rating < 5 ? etoile : etoile_active)} alt='etoile' className='fiche_infos_rating_etoile'></img>
                </div>                        
            )
        };

    return(
        <div className='fiche_infos'>
                <div className='fiche_infos_gauche'>
                        <h2 className='fiche_h2'>{dataFiche.title}</h2>
                        <p className='fiche_p'>{dataFiche.location}</p>
                        <div className='fiche_infos_tag'>
                            <Tags tags={dataFiche.tags}/>
                        </div>
                </div>       
                <div className='fiche_infos_droite'>
                    <div className='fiche_infos_droite_host'>
                        <p className='p_name_host'>{dataFiche.host.name}</p>
                        <div className='fiche_infos_img'>
                            <img className='fiche_infos_img_picture' src={dataFiche.host.picture} alt='name'></img>
                        </div>
                    </div>
                    <Rating rating={dataFiche.rating}/>  
                </div>
            </div>
    )
   };

/****** je créé ma partie des deux collapses  *****/
    function InfosCollapses (props){

/****** je créé une liste des equipements  *****/
        function Equipements (props){
                    return props.equipments.map(
                        (element,index)=> <li key={index}>{element}</li>
                        )
                };

/****** je créé deux const pour apporter dans mon collapse dans le paramettre name  *****/
        const titre1 = 'description';
        const titre2 = 'equipement';

        return (
                <div className='display_infos'>
                    <div className='display_infos_width'>
                        <Collapses id={props.id} name={titre1} description={props.description}/>
                    </div>
                    <div className='display_infos_width'>
                        <Collapses id={props.id} name={titre2} description={Equipements(dataFiche)}/>
                    </div>
                </div>
        )
    };

/****** je retourne la page avec l'incorporation des différentes parties  *****/
return (
        <section className='fiche'>
            <Slideshow pictures={dataFiche.pictures} />
            <Infos props={dataFiche}/>
            <InfosCollapses id={dataFiche.id} description={dataFiche.description}/>
        </section>  
   )
};
export default Fiche;