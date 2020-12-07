import React from 'react'
import './Structure.css'
import svg from '../../assets/svg'

const Structure = ({title, img, alt, info1, info2, linkSite, linkGithub}) => {
    
    return(
        <div className="structure-proyecto-content effectScroll" >
            
            <h4 className="proyecto-h4">{title}</h4>
            
            <img className="img-proyectos" src={img} alt={alt}/>
            
            <p className="proyecto-info1">{info1}</p>
            <p className="proyecto-info2">{info2}</p>

            <div className="content-links-proyectos">
                <a className="proyecto-a" target="_blank" rel="noreferrer" href={linkSite}>Entrar al sitio 
                    <img src={svg.link} alt="icon-link"/>
                </a>
                <a className="proyecto-a" target="_blank" rel="noreferrer" href={linkGithub}>Entrar al código 
                    <img src={svg.link} alt="icon-link"/>
                </a>
            </div>
        </div>
    )
}

export default Structure