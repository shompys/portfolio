import {v4 as genId} from 'uuid';
import {useEffect, useState} from 'react';
import svg from '../../assets/svg';
import human from '../../assets/images/human.jpg';
import './Inicio.css';

const Inicio = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        
        const viewport = () =>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', viewport);
        
        

    },[]);
    
    

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
        <section className="inicio">
            <div className="inicio-content">
                
                <p className="inicio-p">Hola, me llamo Jonathan 
                y quiero ser desarrollador web.<br></br>
                Front-end, back-end o full stack</p>
                   
                <div className="inicio-icons">
                    {
                        data.map((v) =>
                            <a className={v.className} key={v.id} href={v.href} target="_blank" rel="noopener noreferrer"><img src={v.src} alt={v.alt}/></a>
                        )
                    }
                </div>                    
                
                <img className="inicio-img" src={human} alt="student"/>
            </div>
        </section>
    )
}

export default Inicio;