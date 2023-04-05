import '../CSS/Home.css';
import { data } from '../Data/Data'
//console.log(data)
import paysage_rocheux from '../IMG/cote_roche.png';

/*** commenter le code comme ceci est ce utile ou pas ? (grafikart)
 * 
 */

 function Cart (){

    return data.map((element,index)=>
			
				<div className='home_div_cart' key={element.id}>
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
