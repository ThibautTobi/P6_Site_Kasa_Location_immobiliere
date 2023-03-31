import '../CSS/Home.css';
//import data from './Data'
import paysage_rocheux from '../IMG/cote_roche.png';

//import data from './Data'


function Home () {
    return(
        <main>
            <div class="home_bannier">
                <img src={paysage_rocheux} class="home_bannier_payasage" alt="paysage rocheux" title='Chez vous , partout et ailleurs'></img>
            </div>
            <div className='home_div_cart'>
                <div className='cart'></div>
            </div>
        </main>
    )
}
/*
function banniere (){
    return(
        <div>
            <img src={paysage_rocheux} alt="paysage rocheux"></img>
            <h2>Chez vous , partout et ailleurs</h2>
        </div>
    )
}
*/

/*
function Cart (){
    return (
        for (let i = 0 ,)
            <div id={data.id}>
                <img src={data.cover}>{data.titre}</img>
            </div>
    )
};
*/

export default Home ;
