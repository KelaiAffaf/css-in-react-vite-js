import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Form/Form'
import Parent from './Test/Parent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Form/> */}
     <Parent/>
    </div>
  )
}

export default App
