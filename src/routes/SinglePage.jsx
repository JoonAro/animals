import { useParams, useNavigate } from "react-router-dom";
import heart from "../assets/heart.png";
import brokenheart from "../assets/heartbreak.png"
const SinglePage = ({ zoo, resetSearch }) => {
    const params = useParams();
    const navigate = useNavigate();
    const type = params.categories.toString().slice(0, -1);
    const activity = type === "animal" ? "moves" : "flies";
    const data = zoo[params.categories].find((el) => el.name === params.name)
    return (
        <div className="singlePage">
            <button id="backButton" onMouseDown={() => resetSearch()} onClick={() => navigate(-1)}>Back to {params.categories}</button>
            <h2>{data.name}</h2>
            <div>
                <img id="animalpic" src={`https://source.unsplash.com/400x400/?${data.name}`} alt="animal pic"
                />
            </div>
            <p id="likesHolder">{data.likes}</p>
            <div className="buttons">
                <img id="heart" alt="heart" src={data.likes < 0 ? brokenheart : heart} />
            </div>
            <div className="limitWidth">
                <p>{data.name.charAt(0).toUpperCase() + data.name.slice(1)} is a marvelous {type} with many wonderful quirks. It usually {activity} around it's habitat looking for food and a potential mate.</p>
            </div>
        </div>
    )
}
export default SinglePage;