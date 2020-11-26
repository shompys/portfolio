import React from 'react';
import {v4 as genId } from 'uuid';
import {Link} from 'react-scroll';
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

    const [toggleOpen, setToggleOpen] = React.useState(false);
    const [navOpen, setNavOpen] = React.useState(false);

    const deploy = () => {
        console.log('botoncito')
        setToggleOpen(toggleOpen ? !toggleOpen : !toggleOpen);
        setNavOpen(navOpen ? !navOpen : !navOpen);

    }
    
    
    return (
        
        <header>
            <div className={`toggle ${toggleOpen ? 'close' : ''}`} onClick = {deploy}>
                <span></span>
            </div>
            <nav className={`nav ${navOpen ? 'show' : ''}`}>
            {
                data.map((v) =>

                    <div className={v.className} key={v.id}>
                        <img src={v.src} alt={v.alt}/>
                        <Link className="span"
                        onClick={deploy}
                        activeClass="active"
                        to={v.item}
                        spy={true}
                        smooth={true} 
                        offset={v.item  === 'Inicio' ? 0 : 120}
                        duration={700}
                        >{v.item}</Link>
                    </div>
                    
                )
            }
            </nav>

        </header>
        
    )
}

export default Nav;