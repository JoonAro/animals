import heart from '../assets/heart.png'
import brokenheart from '../assets/heartbreak.png'
const Card = (props) => {
    return (
        <div className="card">
            <button id="closeButton" onClick={props.click}>&times;</button>
            <h2>{props.title}</h2>
            <div className="imageHolder">
                <img id="animalpic" src={`https://source.unsplash.com/400x400/?${props.title}`} alt="animal pic"
                />
            </div>
            <p id="likesHolder">{props.likes}</p>
            <div className="buttons">
                <button id="minus" onClick={props.dislikesUpdate}>-</button>
                <img id="heart" src={props.likes < 0 ? brokenheart : heart} />
                <button id="plus" onClick={props.likesUpdate}>+</button>
            </div>
        </div>
    )
}

export default Card;