//import { useState } from 'react';
import '../CSS/Home.css';
import { data } from '../Data/Data'
import paysage_rocheux from '../IMG/cote_roche.png';

//export const resultat = null ; // est ce que c'est bon l'initialisation ?
 function Cart (){

    function handleFiche(e){
        const target = e.target.parentElement;
        const targetId = target.id;
         const resultat = data.find( element => element.id === targetId);
        console.log(targetId);
        console.log(target);
        console.log(resultat);
    }

    return data.map((element,index)=>
			
				<div className='home_div_cart' onClick={handleFiche} key={element.id}>
                    <div className='home_div_cart_img' id={element.id}>
                        <img className='cart_img' src={element.cover} alt='logement'></img>
                        <p>{element.title}</p>
                    </div>
                </div>					
    )
}

// event si je click sur .home_div_cart qui méne a la fiche et intégration du contenue par l'id 

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
}

export default Home ;
