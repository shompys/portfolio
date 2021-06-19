import './Conocimientos.css';
import {v4 as genId} from 'uuid';
import Item from '../item/Item';
import svg from '../../assets/svg';

const Conocimientos = () => {
    
    const tools = [
        {
            id: genId(),
            src: svg.html5,
            alt: 'html',
            name: 'HTML5'
        },
        {
            id: genId(),
            src: svg.css3,
            alt: 'css3',
            name: 'CSS3'
        },
        {
            id: genId(),
            src: svg.js,
            alt: 'javaScript',
            name: 'javaScript'
        },
        {
            id: genId(),
            src: svg.node,
            alt: 'node',
            name: 'NODE'
        },
        {
            id: genId(),
            src: svg.npm,
            alt: 'npm',
            name: 'NPM'
        },
        {
            id: genId(),
            src: svg.node,
            alt: 'express',
            name: 'EXPRESS'
        },
        {
            id: genId(),
            src: svg.database,
            alt: 'mongo',
            name: 'MONGODB'
        },
        {
            id: genId(),
            src: svg.react,
            alt: 'react',
            name: 'REACT'
        },
        {
            id: genId(),
            src: svg.php,
            alt: 'php',
            name: 'PHP'
        },
        {
            id: genId(),
            src: svg.database,
            alt: 'database',
            name: 'MYSQL'
        },
        {
            id: genId(),
            src: svg.git,
            alt: 'git',
            name: 'GIT'
        }
        
    ]
    
    return(
        <section id="Conocimientos" className="conocimientos-section">
            <h1 className="effectScroll">Conocimientos</h1>
            <div className="conocimientos-content">
            {
                tools.map((v) => <Item key={v.id} src={v.src} alt={v.alt} name={v.name}/>)
            }
            </div>
        </section>
    )
}

export default Conocimientos;