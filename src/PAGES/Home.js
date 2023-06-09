import '../CSS/Home.css';
import { data } from '../Data/Data';
import paysage_rocheux from '../IMG/cote_roche.png';
import { Link } from 'react-router-dom';

/****** j'incrémente mes différentes cartes a partir de data et j'englobe avec un link pour rediriger vers une fiche de présentation *****/
function Cart (){

        return data.map((element,index)=>
            <Link to={"Fiche/"+element.id} className='a_cart'key={index}>
                <div className='home_div_cart'>
                    <div className='home_div_cart_img' id={element.id}>
                        <img className='cart_img' src={element.cover} alt='logement'></img>
                        <p className='p_titre'>{element.title}</p>
                    </div>
                </div>	
            </Link>				
        )
    };

function Home () {
 
    return(
        <section>
            <div className="home_bannier"> 
                <div className='home_bannier_cadre'>
                    <img src={paysage_rocheux} className="home_bannier_payasage" alt="paysage rocheux" title='Chez vous , partout et ailleurs'></img>
                </div>
                <div className='home_bannier_cadre'>
                    <p className='home_bannier_payasage_titre'>Chez vous , partout et ailleurs</p>
                </div>
            </div>
            <div className='home_div'>
                <div className='home_div_display'>
                    <Cart/>
                </div>
            </div>
        </section>
    )
};
export default Home ;