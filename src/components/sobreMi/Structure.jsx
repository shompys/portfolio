import './Structure.css';

const Structure = ({title, info1}) => {
    
    return(
        <div className="structure-content effectScroll" >

            <h3 className="structure-h3">{title}</h3>
            
            <p className="structure-p">{info1}</p>
            
        </div>
    )
}

export default Structure;