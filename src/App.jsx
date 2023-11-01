import { useState } from 'react'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import pic from './owl-50267_1280.jpg'
function App() {
  const [animals, setAnimals] = useState([
    { id: "1", name: "bear", },
    { id: "2", name: "lion" }

  ]);

  return (
    <>
      <Header />
      <main>
        <div className="cards">
          <Card name={animals[0].name} />
          <Card name={animals[1].name} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
