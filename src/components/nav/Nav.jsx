import {v4 as genId } from 'uuid';
import './Nav.css';
import svg from '../../assets/svg';

const Nav = () =>{
    
    const data = [
        {
            id: genId(),
            src: svg.home,
            alt: 'home',
            item: 'Inicio',
            className: ' nav-options fix-end'
        },
        {
            id: genId(),
            src: svg.about,
            alt: 'about me',
            item: 'Sobre mí',
            className: ' nav-options'
        },
        {
            id: genId(),
            src: svg.conocimiento,
            alt: 'conocimientos',
            item: 'Conocimientos',
            className: ' nav-options'
        },
        {
            id: genId(),
            src: svg.code,
            alt: 'code',
            item: 'Proyectos',
            className: ' nav-options'
        },
        {
            id: genId(),
            src: svg.contact,
            alt: 'contact',
            item: 'Contacto',
            className: ' nav-options fix-start'
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

                    <div className={v.className} key={v.id}><img src={v.src} alt={v.alt}/><span className="span">{v.item}</span></div>
                )
            }
            </nav>

        </header>
        
    )
}

export default Nav;