import React from 'react'
import './Proyectos.css'
import {v4 as genId} from 'uuid';
import Structure from './Structure'
import starfleet from '../../assets/images/starfleet.png'
import portfolio from '../../assets/images/portfolio.png'
import apirest from '../../assets/images/keyboard.jpg'

const Proyectos = () => {

    const info = [

        {
            id: genId(),
            title: 'STARFLEET',
            img: starfleet,
            alt: 'portada de sitio starfleet',
            info1: 'Sitio web para la administración y gestión de los datos de empresas dedicadas al transporte y a la logística.',
            info2:'Proyecto institucional, se utilizaron las siguientes tecnologías: HTML5, CSS3, BOOSTRAP, JQUERY, PHP, MYSQL.',
            linkSite: 'https://starfleet.company/profliendro/',
            linkGitHub: 'https://github.com/shompys/starfleet',
        },
        {
            id: genId(),
            title: 'PORTFOLIO',
            img: portfolio,
            alt: 'portada de sitio portfolio',
            info1: 'Mi portfolio personal, creado para mostrar habilidades, y un historial de futuros proyectos.',
            info2: 'El sitio estará siempre en constante crecimiento por lo tanto se eligió REACT.JS para el fácil mantenimiento.',
            linkSite: 'https://shompys.github.io/portfolio/',
            linkGitHub: 'https://github.com/shompys/portfolio'

        },
        {
            id: genId(),
            title: 'API REST',
            img: apirest,
            alt: 'laptop',
            info1: 'Proyecto personal aplicando integraciones con apis externas aún no se encuentra en producción.',
            info2: 'Tecnologías: Express, MongoDB, JWT, sintaxis de ecmascript 6 compilado con Babel',
            linkSite: 'https://github.com/shompys/app-twitch-backend',
            linkGitHub: 'https://github.com/shompys/app-twitch-backend'
        }
    ]

    return(
        <section id="Proyectos" className="Proyectos-section">
            <h1 className="effectScroll">Proyectos</h1>
            <div className="proyectos-content">
                {
                    info.map(v => <Structure key={v.id} title={v.title} img={v.img} alt={v.alt} info1={v.info1} info2={v.info2} linkSite={v.linkSite} linkGithub={v.linkGitHub} />)
                }
            </div>
        </section>
    )
}

export default Proyectos