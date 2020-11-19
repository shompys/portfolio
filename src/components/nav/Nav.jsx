import {v4 as genId } from 'uuid';
import './Nav.css';
import svg from '../../assets/svg';

const Nav = () =>{
    
    const data = [
        {
            id: genId(),
            src: svg.home,
            alt: 'home',
            item: 'Inicio'
        },
        {
            id: genId(),
            src: svg.about,
            alt: 'about me',
            item: 'Sobre mí'
        },
        {
            id: genId(),
            src: svg.conocimiento,
            alt: 'conocimientos',
            item: 'Conocimientos'
        },
        {
            id: genId(),
            src: svg.code,
            alt: 'code',
            item: 'Proyectos'
        },
        {
            id: genId(),
            src: svg.contact,
            alt: 'contact',
            item: 'Contacto'
        }
    ]
    
    const deploy = () =>{

        document.querySelector('.toggle').classList.toggle('close')
        document.querySelector('.nav').classList.toggle('show')
                                               
    }

    return (
        
        <header>
            <div className="toggle" onClick = {deploy}>
                <span></span>
            </div>
            <nav className="nav">
            {
                data.map((v) =>

                    <div className="nav-options" key={v.id}><img src={v.src} alt={v.alt}/><span className="span">{v.item}</span></div>
                )
            }
            </nav>

        </header>
        
    )
}

export default Nav;