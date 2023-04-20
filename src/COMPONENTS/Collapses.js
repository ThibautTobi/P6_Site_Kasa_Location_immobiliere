import { useState } from 'react';
import flecheBas from '../IMG/Vector-fleche.svg';
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';
import '../CSS/Collapses.css';

/***************************** fonction ouverture multiple ****************************/
    function Collapses ({id,name,description}){

        const [open,setOpen] = useState(false);
        const [fleche,setFleche]= useState(flecheBas);
        const [style, setStyle] = useState("p_show");

             function ChangeStyle () {
            if( open === false){
                setOpen(true)
                setStyle("p_show_active");
                setFleche(flecheHaut)
            }else{
                setOpen(false)
                setStyle("p_show");
                setFleche(flecheBas);
            }
             };
    return (
                    <div id={id}>
                        <div className='collapse_div_titre' onClick={ChangeStyle}>
                            {name}
                            <img src={fleche} alt='fleche'></img>
                        </div>
                        <div className={'collapse_div_des_show'}>
                            <p className={style}>
                            {description}
                            </p>
                        </div>
                    </div>
                    )
    };
export default Collapses;