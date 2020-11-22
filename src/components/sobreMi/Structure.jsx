import './Structure.css';

const Structure = ({title, info1}) => {
    
    return(
        <div className="structure-content">

            <h3 className="yo-h3">{title}</h3>

    <p className="yo-p">{info1}</p>
            
        </div>
    )
}

export default Structure;