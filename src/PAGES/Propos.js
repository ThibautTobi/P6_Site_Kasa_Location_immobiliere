import '../CSS/Propos.css';
import paysage_montagne from '../IMG/montage.png';

function Propos (){
    return (
        <div>
            <div className='banner'>
                <img src={paysage_montagne} className='banner_montagne' alt='montagne'></img>
            </div>
            <div>Fiabilité</div>
            <div>Respect</div>
            <div>Service</div>
            <div>Responsabilité</div>
        </div>
    )
};

export default Propos;