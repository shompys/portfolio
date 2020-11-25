import Structure from './Structure';
import './SobreMi.css';
import {v4 as genId} from 'uuid';

const SobreMi = ()=>{
    
    const info = [
        {
            id: genId(),
            title: 'Análista de Sistemas',
            info1: 'Soy estudiante del Instituto de Formación Técnica Superior N° 12, con fecha de finalización estimada para el 21/12/2020 .'
        },
        {
            id: genId(),
            title: 'Futuro Licenciado en Gestión de Tecnología.',
            info1: 'Continuaré mis estudios en la sede de la Universidad Nacional de la Matanza.'
        },
        {
            id: genId(),
            title: '¿De donde soy?',
            info1: 'Vivo en Argentina, Ciudad Autonoma de Buenos Aires.'
        },
        {
            id: genId(),
            title: '¿A que me dedico?',
            info1: 'Actualmente trabajo en una clinica en la parte administrativa.'
        },
    ]

    return(
        <section id="Sobre mí" className="sobreMi-section">
            <h1 className="effectScroll">Sobre mí</h1>
            <div className="sobreMi-content">
            {
                info.map((v)=><Structure key={v.id} title={v.title} info1={v.info1}/>)
            }
            </div>
        </section>
    )

}

export default SobreMi;