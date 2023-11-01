import { useState } from 'react'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className="cards">
          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
