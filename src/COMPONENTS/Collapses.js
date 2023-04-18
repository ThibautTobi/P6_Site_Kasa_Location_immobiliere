import { useState } from 'react';
import flecheBas from '../IMG/Vector-fleche.svg';
import flecheHaut from '../IMG/Vector-fleche-ouvert.svg';
import '../CSS/Collapses.css';

/***************************** fonction ouverture multiple ****************************/
    function Collapses (id,name,description){

        const [open,setOpen] = useState(false);
        const [fleche,setFleche]= useState(flecheBas);
        //const [show,setShow] = useState()
        const [style, setStyle] = useState("p_show");

             function ChangeStyle () {
            open === false ? setOpen(true) : setOpen(false);
            // style === "p_show" ? setStyle("p_show_active") : setStyle("p_show");
            open === true ?setStyle("p_show_active") && setFleche(flecheHaut): setStyle("p_show") && setFleche(flecheBas);
            // fleche === flecheBas ? setFleche(flecheHaut) : setFleche(flecheBas) ;
            // open === true ? setFleche(flecheHaut) : setFleche(flecheBas) ;
             };

    return (
                    <div id={id} key={id}>
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



/************************* avant modif *****************************/
/* <div className='propos_div' id={props.id}>
<div className='propos_div_des' onClick={changeStyle}>{props.name}
    <img src={(open === true ? flecheHaut : flecheBas ) } alt='fleche'></img>
</div>
<div className={'propos_div_des_show ' + (open === true ? 'p_show_active' : 'p_show')}>
    <p className={(open === true ? 'p_show_active' : 'p_show')}>
    {props.description}
    </p>
</div>
</div>) */