import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const user = {
    name: "hussam",
    phone: "66917953"
  }

  function clickHandler() {
    alert("im clicked")
  }

  return (
    <div  >
      <button onClick={clickHandler}>
        click me
      </button>
      {isLoggedIn && <div>{user.name}</div>}
    </div>

  )
}

export default App
