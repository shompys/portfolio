import './Item.css';

const Item = ({src, alt, name}) => {
    return(
        <div className="item-content">
            <img src={src} alt={alt}/>
            <span>{name}</span>
        </div>
    )
}

export default Item;