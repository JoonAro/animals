import { Link } from 'react-router-dom';
import heart from '../assets/heart.png'
import brokenheart from '../assets/heartbreak.png'
const Card = (props) => {
    const animalOrBird = props.category;
    return (
        <div className={animalOrBird === "animals" ? "card" : "birdCard"}>
            <button id="closeButton" onClick={props.click}>&times;</button>
            <Link to={props.title}>
                <h2>{props.title}</h2>
            </Link>
            <div>
                <img id="animalpic" src={`https://source.unsplash.com/400x400/?${props.title}`} alt="animal pic"
                />
            </div>
            <p id="likesHolder">{props.likes}</p>
            <div className="buttons">
                <button id="minus" onClick={props.dislikesUpdate}>-</button>
                <img id="heart" alt="heart" src={props.likes < 0 ? brokenheart : heart} />
                <button id="plus" onClick={props.likesUpdate}>+</button>
            </div>
        </div>
    )
}
export default Card;