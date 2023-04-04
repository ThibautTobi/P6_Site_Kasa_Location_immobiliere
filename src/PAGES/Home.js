import '../CSS/Home.css';
//import { data } from '../Data/Data'
//console.log(data)
import paysage_rocheux from '../IMG/cote_roche.png';




/*** commenter le code comme ceci est ce utile ou pas ? (grafikart)
 * 
 */


/*** une partie du fichier data pour tester l'integration data en dynamique ***/

const dataTest =
[
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
	}
];

/*   incrémentation des cartes avec les logements
for (let i = 0 , i <= data.length ; i++){  est ce que je refait un variable par src a importer
		
}
*/

// function Cart (){
// 	for (let i = 0 , i <= data.length ; i++){

// 				<div className='home_div_cart'>
//                     <div className='home_div_cart_img' id={dataTest[i].id}>
//                         <img className='cart_img' src={dataTest[i].cover} alt='logement'></img>
//                         <p>{dataTest[i].title}</p>
//                     </div>
//                 </div>
// 	}
// }

// event si je click sur .home_div_cart qui méne a la fiche et intégration du contenue par l'id 

function Home () {

	
	//console.log(dataTest);
	const cart_data = 
				<div className='home_div_cart'>
                    <div className='home_div_cart_img' id={dataTest[0].id}>
                        <img className='cart_img' src={dataTest[0].cover} alt='logement'></img>
                        <p className='cart_p'>{dataTest[0].title}</p>
                    </div>
                </div>
	

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
                <div>{cart_data}</div>
            </div>
        </section>
    )
}


/*
	function cart (dataTest){
				<div className='home_div_cart'>
                    <div className='home_div_cart_img' id={dataTest.id}>
                        <img src={dataTest.cover} alt='image logement'></img>
                        <h2>{dataTest.title}</h2>
                    </div>
                </div>
	}
//for (let i = 0 ,)
*/


export default Home ;
