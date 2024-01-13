import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { animals, birds } from './animalsList.js'
import Home from './routes/Home.jsx'
import Root from './routes/Root.jsx'
import CategoryPage from './routes/CategoryPage.jsx'
import SinglePage from './routes/SinglePage.jsx'
function App() {
  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
  });
  const [search, setSearch] = useState("");

  //removeCard filters the array. It takes every creature that does not match the name of the card clicked and returns them to the array.
  const removeCard = (name, category) => {
    const updateArrayBin = zoo[category].filter((creature) => creature.name !== name);
    setZoo({ ...zoo, [category]: updateArrayBin });
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const resetSearch = () => {
    setSearch("");
  }
  //likesCounter is redefined at categoryPage to likesCounter and dislikesCounter. There it is given the event add or remove. This removes the need for two functions.
  const likesCounter = (animalData, event, category) => {
    const updatedArray = zoo[category].map((creature) => {
      if (creature.name == animalData && event === "add") {
        return { name: creature.name, likes: creature.likes + 1 };
      } else if (creature.name == animalData && event === "remove") {
        return { name: creature.name, likes: creature.likes - 1 };
      }
      return { name: creature.name, likes: creature.likes };
    });
    setZoo({ ...zoo, [category]: updatedArray });
  };
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { path: '/', element: <Home resetSearch={resetSearch} /> },
        {
          path: ':categories', element: (
            <CategoryPage {...zoo} removeCard={removeCard}
              searchHandler={searchHandler}
              likesCounter={likesCounter}
              search={search} />),
        },
        { path: ":categories/:name", element: <SinglePage zoo={zoo} likesCounter={likesCounter} resetSearch={resetSearch} /> },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
export default App;