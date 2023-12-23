import { useState } from 'react'
import Form from './components/Forms/Form'
import './App.css'
import Signin from './components/signin/Signin'
import Signwith from './components/signopts/Signwith'
import Image from './components/hero-image/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Form /> */}
  {/* <Signin/> */}
  {/* <Signwith/> */}
  <Image/>
  </>
  )
}

export default App
