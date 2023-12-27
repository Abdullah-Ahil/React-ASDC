import { useState } from 'react'
import Form from './components/Forms/Form'
import './App.css'
import Signin from './components/signin/Signin'
import Signwith from './components/signopts/Signwith'
import Image from './components/hero-image/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h2 className="travling">Travling!</h2>
     <Form />
  {/* <Signin/> */}
  {/* <Signwith/> */}
  <Image/>
  <span className='copy'>© 2021 Travling. All Rights Reserved</span>
  </div>
  )
}

export default App
