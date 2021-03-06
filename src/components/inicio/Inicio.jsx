import {v4 as genId} from 'uuid';
//import {useEffect, useState} from 'react';
import svg from '../../assets/svg';

import cv from '../../assets/cv/Molina-Gomez-Jonathan.pdf';
import './Inicio.css';
import { useEffect } from 'react';

const Inicio = () => {
    
    useEffect(()=>{
        //Crear un componente, esta mal implementado
        document.querySelector('.inicio-content').classList.add('opacity1');
        
    })

    const data = [
        {
            id: genId(),
            className: 'i-linkedin',
            href: 'https://www.linkedin.com/in/jonathangomezit/',
            src: svg.linkedin,
            alt: 'linkedin'
        },
        {
            id: genId(),
            className: 'i-github',
            href: 'https://github.com/shompys',
            src: svg.github,
            alt: 'github'
        }
    ]
    
    return(
        <section id="Inicio" className="inicio-section">
            <div  className="inicio-content">
                {/* <img className="inicio-img" src={human} alt="student"/> */}
                
                <p className="inicio-p">Hola, mi nombre es Jonathan.<br/>
                Soy desarrollador web FullStack<br/>
                 con el conjunto de tecnologías M.E.R.N.</p>
                 <a className="inicio__cv" href={cv} target="_blank" rel="noreferrer" download="Molina-Gomez-Jonathan">Descargar CV</a>
                 
                 
                <div className="inicio-icons">
                    {
                        data.map((v) =>
                            <a className={v.className} key={v.id} href={v.href} target="_blank" rel="noopener noreferrer"><img src={v.src} alt={v.alt}/></a>
                        )
                    }
                </div>                    
                <img className="inicio-img" src={svg.dev} alt="developer"/>
                
            </div>
        </section>
    )
}

export default Inicio;