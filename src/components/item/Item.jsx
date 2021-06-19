import './Item.css';

const Item = ({src, alt, name}) => {
    return(
        <div className="item-content effectScroll">
            <img src={src} alt={alt}/>
            <span>{name}</span>
        </div>
    )
}

export default Item;