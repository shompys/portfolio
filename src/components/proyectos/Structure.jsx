import React from 'react'
import './Structure.css'
import svg from '../../assets/svg'

const Structure = ({title, img, alt, info1, info2, linkSite, linkGithub}) => {
    
    return(
        <div className="structure-proyecto-content effectScroll" >
            
            <h4 className="proyecto-h4">{title}</h4>
            
            <img className="img-proyectos" src={img} alt={alt}/>
            
            <p className="proyecto-info1">{info1}</p>
            {info2 && <p className="proyecto-info2">{info2}</p>}
            
            <div className="content-links-proyectos">
                
                <a className="proyectos-set proyectos_link_site" target="_blank" rel="noreferrer" href={linkSite}>{linkSite ?'Entrar al sitio': 'En construcción'} 
                    <img src={svg.link} alt="icon-link"/>
                </a>
                <a className="proyectos-set proyectos_link_code" target="_blank" rel="noreferrer" href={linkGithub}>Entrar al código 
                    <img src={svg.link} alt="icon-link"/>
                </a>
            </div>
        </div>
    )
}

export default Structure