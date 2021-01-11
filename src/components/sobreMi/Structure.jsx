import './Structure.css';

const Structure = ({title, info1, info2, info3}) => {
    
    return(
        <div className="structure-content effectScroll" >

            <h3 className="structure-h3">{title}</h3>
            
            <p className="structure-p">{info1}</p>
            <p className="structure-p">{info2}</p>
            <p className="structure-p">{info3}</p>
            
        </div>
    )
}

export default Structure;