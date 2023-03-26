// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cosmatics from './components/Cosmatics/Cosmatics'
import Shoes from './components/Shoes/Shoes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmatics></Cosmatics>
      <Shoes></Shoes>
    </div>
  )
}

export default App
