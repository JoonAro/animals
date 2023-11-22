import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/* import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx' */
import { animals, birds } from './animalsList.js'

import Home from './routes/Home.jsx'
import AnimalsPage from './routes/AnimalsPage'
import BirdsPage from './routes/BirdsPage.jsx'
import Root from './routes/Root.jsx'
function App() {
  //if routes is /birds show birds
  //let wildlife = animals;

  /* const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
  }); */
  const [animalsList, setAnimals] = useState(animals);
  //console.log(animalsList);
  //console.log(animals)
  //console.log(birds)
  /* const [animalsList, setAnimals] = useState({ animals, birds }); */

  console.log(animals);
  const [search, setSearch] = useState("");
  //console.log(search);
  /* animalsToBirds(); */
  const removeCard = (name) => {
    const updateArrayBin = animalsList.filter((animal) => animal.name !== name);
    setAnimals(updateArrayBin);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };



  const likesCounter = (animalsData, events) => {
    const updatedArray = animalsList.map((animal) => {
      if (animal.name == animalsData && events === "add") {
        return { name: animal.name, likes: animal.likes + 1 };
      } else if (animal.name == animalsData && events === "remove") {
        return { name: animal.name, likes: animal.likes - 1 };
      }
      return { name: animal.name, likes: animal.likes };
    });
    setAnimals(updatedArray);
    // console.log(updatedArray);
  };
  const searchRes = (filteredAnimalsList) => {
    if (filteredAnimalsList.length === 0) {
      return "Animal not found";
    }
  };
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/animals', element: (
            <AnimalsPage removeCard={removeCard}
              searchHandler={searchHandler}
              likesCounter={likesCounter}
              animalsList={animalsList}
              search={search} />),
        },
        {
          path: '/birds', element: (
            <BirdsPage removeCard={removeCard}
              searchHandler={searchHandler}
              likesCounter={likesCounter}
              animalsList={animalsList}
              search={search} />),
        }

      ]
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
