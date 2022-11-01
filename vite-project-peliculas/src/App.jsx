import { useState } from 'react'
import './App.css'
import { MyRoutes } from './MyRoutes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1 className='title'> Mirá lo que te guste </h1>
      </header>
      <MyRoutes />
    </div>
  )

}

export default App
