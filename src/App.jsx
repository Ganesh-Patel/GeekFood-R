import { useState } from 'react'
import './App.css'
import Header from './mycomponents/Header/Header'
import Body from './mycomponents/Body/Body'
import Footer from './mycomponents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Body />
     <Footer />
    </>
  )
}

export default App
