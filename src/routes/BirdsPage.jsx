import { Link } from 'react-router-dom'
import Card from "../components/Card"
import pic2 from '../assets/giraffe123.jpg';
function BirdsPage({ removeCard, searchHandler, likesCounter, zoo, originalZoo, search }) {
    return (
        <>
            <main>
                <Link to="/" onClick={() => originalZoo()}><img className="animalLink" src={pic2} alt="giraffe" /></Link>
                <div className="searchHolder">
                    <p>Search:</p>
                    <div className="searchBar">
                        <input type="text" name="searching" onChange={searchHandler} placeholder="animal name here.." />
                    </div>
                </div>
                <div className="cards">
                    {zoo.filter((animal) =>
                        animal.name.toLowerCase().startsWith(search.toLowerCase())
                    )
                        .map((animal) => (
                            <Card
                                key={animal.name}
                                title={animal.name}
                                likes={animal.likes}
                                click={() => removeCard(animal.name)}
                                likesUpdate={() => likesCounter(animal.name, "add")}
                                dislikesUpdate={() => likesCounter(animal.name, "remove")}
                            />
                        ))}
                </div>
            </main>
        </>
    )
}
export default BirdsPage;