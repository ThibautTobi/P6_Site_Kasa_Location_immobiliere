
//import data from '../Data'

import '../CSS/Fiche.css';

function Fiche (){
    return(
        <div className="para"> 
            <p>ceci sera les description de fiche hebergements</p>
        </div>
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

/*
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
*/