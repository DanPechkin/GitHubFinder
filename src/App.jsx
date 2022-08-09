import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <button className="btn">Hello daisyUI</button>
    </div>
  )
}

export default App
