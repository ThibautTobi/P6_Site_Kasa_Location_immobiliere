import fleche from '../IMG/Vector-fleche.svg'
//import {data} from '../Data/Data'
import etoile from '../IMG/Vector_etoile.png';
import '../CSS/Fiche.css';

function Fiche (){

    const data =
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

    return(
        <section className='fiche'>
            <div className="fiche_carrousel"> 
                
            </div>
            <div className='fiche_infos'>
                <div className='fiche_infos_gauche'>
                    <h2>{data[0].title}</h2>
                    <p>{data[0].description}</p>
                    <div className='fiche_infos_tag'>
                        <div className='fiche_infos_tag_non'>cozy</div>
                        <div className='fiche_infos_tag_non'>canal</div>
                        <div className='fiche_infos_tag_non'>parais 10</div>
                    </div>
                </div>
                <div className='fiche_infos_droite'>
                    <div className='fiche_infos_droite_host'>
                        <p>{data[0].host.name}</p>
                        <div className='fiche_infos_img'>
                            <img className='fiche_infos_img_picture' src={data[0].host.picture} alt=''></img>
                        </div>
                    </div>
                    <div className='fiche_infos_rating'>
                        <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>                        <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                        <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                        <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                        <img src={etoile} alt='etoile' className='fiche_infos_plus_rating_etoile'></img>
                    </div>
                </div>
            </div>
            <div className='infos'>
                <div className='infos_plus' >description<img src={fleche} alt='fleche'></img></div>
                <div className='infos_plus' >equipements<img src={fleche} alt='fleche'></img></div>
            </div>
        </section>
    )
};
/*
function Fiche (){
    return (
        <div id={data.id}>

            <h2>{data.title}</h2>

            {data.cover}

            {data.pictures}

            <p>{data.description}</p>
            <div>non de l'hote + image dans un rond</div>
            <div>rating</div>
            <div>description</div>
            <div>equipements</div>

        </div>
    )
};
*/
export default Fiche;