import Structure from './Structure';
import './SobreMi.css';
import {v4 as genId} from 'uuid';

const SobreMi = ()=>{
//     Soy analista de sistemas, especializándome en tecnologías web, apasionado por el constante aprendizaje y la implementación de nuevas tecnologías.
// El Stack MERN (mongo, express, react, node), arquitecturas ApiRest y con muchas ganas de conocer y aprender implementaciones de microservicios en producción con escabilidad horizontal.
// Me considero una persona autodidacta, responsable y proactiva con las cualidades para trabajar en equipo. 
    const info = [
        {
            id: genId(),
            title: '¿Quién soy?',
            info1: 'Soy analista de sistemas, especializándome en tecnologías web, apasionado por el constante aprendizaje y la implementación de nuevas tecnologías.',
            
        },
        {
            id: genId(),
            title: 'Estudios',
            info1: 'Continuaré mis estudios en la sede de la Universidad Nacional de la Matanza para la licenciatura en Gestión de Tecnología.'
        },
        {
            id: genId(),
            
            title: 'Curso en UTN',
            info1: 'Presencial, con certificado titulado Professional WebMaster, con una carga horaria de 144hs.'
        },
        {
            id: genId(),
            title: 'Perfil encaminado a',
            info1: 'Stack MERN (mongo, express, react, node), arquitecturas ApiRest y con muchas ganas de conocer y aprender implementaciones de microservicios con escalabilidad horizontal.'
        },
        {
            id: genId(),
            title: '¿Cómo soy?',
            info1: 'Me considero una persona autodidacta, responsable y proactiva con las cualidades para trabajar en equipo.'
        },
        {
            id: genId(),
            title: '¿De donde soy?',
            info1: 'Vivo en la Ciudad Autónoma de Buenos Aires, Argentina.'
        }
        
    ]

    return(
        <section id="Sobre mí" className="sobreMi-section">
            <h1 className="effectScroll">Sobre mí</h1>
            <div className="sobreMi-content">
            {
                info.map((v)=><Structure key={v.id} title={v.title} info1={v.info1} info2={v.info2} info3={v.info3}/>)
            }
            </div>
        </section>
    )

}

export default SobreMi;