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
            title: 'Estudios',
            info1: 'Continuaré mis estudios en la sede de la Universidad Nacional de la Matanza, para la Licenciatura de Gestión de la Tecnología.'
        },
        {
            id: genId(),
            title: 'Curso en UTN',
            info1: 'Presencial, con certificado titulado Professional WebMaster, con una carga horaria de 144hs.'
        },
        {
            id: genId(),
            title: '¿De donde soy?',
            info1: 'Vivo en la Ciudad Autónoma de Buenos Aires, Argentina.'
        },
        {
            id: genId(),
            title: '¿A qué me dedico?',
            info1: 'Trabajo en una clínica, en el sector administrativo.'
        }

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