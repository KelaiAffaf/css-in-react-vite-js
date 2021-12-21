import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Footer/>
    </div>
  )
}

export default App
