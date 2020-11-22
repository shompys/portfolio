import Structure from './Structure';
import './SobreMi.css';
import {v4 as genId} from 'uuid';

const SobreMi = ()=>{
    
    const info = [
        {
            id: genId(),
            title: 'Loren',
            info1: 'Lorem reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            id: genId(),
            title: 'Loren',
            info1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            id: genId(),
            title: 'Loren',
            info1: 'Lorem ipsum dolor sit amet, optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            id: genId(),
            title: 'Loren',
            info1: 'Lorem ipsum dolor culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
    ]

    return(
        <section className="sobreMi-section">
            <h1>Sobre mí</h1>
            <div className="sobreMi-content">
            {
                info.map((v)=><Structure key={v.id} title={v.title} info1={v.info1}/>)
            }
            </div>
        </section>
    )

}

export default SobreMi;