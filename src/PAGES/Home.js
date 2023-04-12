import { useState } from 'react';
import '../CSS/Home.css';
import { data } from '../Data/Data';
import paysage_rocheux from '../IMG/cote_roche.png';
import { Link } from 'react-router-dom';

//export let resultat = "null" ; // est ce que c'est bon l'initialisation ?

function Cart (){

    // exporter le state avec une redirection vers Fiche
    const [dataFichee,setDataFiche ] = useState([]);
    //const [goToFiche,setGoToFiche] = useState(false);

    function handleFiche(e){

        const target = e.target.parentElement;
        // const targetId = target.id;

        /// const resultat = dataFiche.splice();
        setDataFiche(target.id);
        //resultat = data.find( element => element.id === targetId);
        //  setTest = resultat;
        //console.log(targetId);
        console.log(target);
        //console.log(resultat);
        
         console.log(dataFichee);


        // if (goToFiche){
        //     return <Navigate to='/Fiche' />
        // }

    };

    console.log(dataFichee);
    //  useprametre

    return data.map((element,index)=>
			<Link to={"Fiche/"+element.id}>
				<div className='home_div_cart' onClick={handleFiche} key={element.index}>
                    <div className='home_div_cart_img' id={element.id}>
                        <img className='cart_img' src={element.cover} alt='logement'></img>
                        <p>{element.title}</p>
                    </div>
                </div>	
            </Link>				
    )
};

function Home () {

    
    return(
        <section>
            <div class="home_bannier"> 
                <div className='home_bannier_cadre'>
                    <img src={paysage_rocheux} class="home_bannier_payasage" alt="paysage rocheux" title='Chez vous , partout et ailleurs'></img>
                </div>
                <div className='home_bannier_cadre'>
                    <p className='home_bannier_payasage_titre'>Chez vous , partout et ailleurs</p>
                </div>
            </div>
            <div className='home_div'>
                <div className='home_div_display'>{Cart()}</div>
            </div>
        </section>
    )
};

export default Home ;