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
  /* const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
  }); */

  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
  });
  const changeZoo = () => {
    setZoo(animals);
  }

  const originalZoo = () => {
    setZoo({
      animals: animals,
      birds: birds,
    });
  }
  const changeZoo2 = () => {
    setZoo(birds);
  }
  /* const handleClick = (item_id, e) => {
    let copiedZoo = { ...zoo };
    delete copiedZoo[item_id];
    setZoo(zoo => ({
      ...copiedZoo
    }));
    console.log(zoo); */

  const [search, setSearch] = useState("");

  const removeCard = (name) => {
    console.log(zoo);
    const updateArrayBin = zoo.filter((animal) => animal.name !== name);
    setZoo(updateArrayBin);
    console.log(updateArrayBin);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const likesCounter = (animalsData, events) => {
    const updatedArray = zoo.map((animal) => {
      if (animal.name == animalsData && events === "add") {
        return { name: animal.name, likes: animal.likes + 1 };
      } else if (animal.name == animalsData && events === "remove") {
        return { name: animal.name, likes: animal.likes - 1 };
      }
      return { name: animal.name, likes: animal.likes };
    });
    setZoo(updatedArray);
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
        { path: '/', element: <Home changeZoo={changeZoo} changeZoo2={changeZoo2} zoo={zoo} /> },
        {
          path: '/animals', element: (
            <AnimalsPage removeCard={removeCard}
              searchHandler={searchHandler}
              likesCounter={likesCounter}
              zoo={zoo}
              originalZoo={originalZoo}
              search={search} />),
        },
        {
          path: '/birds', element: (
            <BirdsPage removeCard={removeCard}
              searchHandler={searchHandler}
              likesCounter={likesCounter}
              zoo={zoo}
              originalZoo={originalZoo}
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
