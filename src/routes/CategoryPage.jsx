import Card from "../components/Card"
import { useParams } from 'react-router-dom';
import pic2 from '../assets/giraffe123.jpg';
//if params equals  use animals. if birds use birds
function CategoryPage(props) {
    const params = useParams();
    const category = params.categories;
    const animalOrBird = category.toString().slice(0, -1);
    console.log("category", category);
    console.log("props", props);
    console.log("params", params);
    return (
        <main>
            <div className="searchHolder">
                <p>Search:</p>
                <div className="searchBar">
                    <input type="text" name="searching" onChange={props.searchHandler} placeholder={animalOrBird + ` name here..`} />
                </div>
            </div>
            <div className="cards">
                {props[category].filter((creature) =>
                    creature.name.toLowerCase().startsWith(props.search.toLowerCase())
                )
                    .map((creature) => (
                        <Card
                            key={creature.name}
                            title={creature.name}
                            likes={creature.likes}
                            category={category}
                            click={() => props.removeCard(creature.name, category)}
                            likesUpdate={() => props.likesCounter(creature.name, "add", category)}
                            dislikesUpdate={() => props.likesCounter(creature.name, "remove", category)}
                        />
                    ))}
            </div>
        </main>
    )
}
export default CategoryPage;