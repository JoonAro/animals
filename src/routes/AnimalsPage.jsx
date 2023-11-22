import Card from "../components/Card"
function AnimalsPage({ removeCard, searchHandler, likesCounter, animalsList, search }) {
    return (
        <>
            <main>
                <div className="searchHolder">
                    <p>Search:</p>
                    <div className="searchBar">
                        <input type="text" name="searching" onChange={searchHandler} placeholder="animal name here.." />
                    </div>
                </div>
                <div className="cards">
                    {animalsList.filter((animal) =>
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
export default AnimalsPage;