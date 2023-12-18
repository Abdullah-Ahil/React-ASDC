
import { useState } from 'react';
import './App.css'

import Parent from './components/parent/Parent'

function App() {
  // const [count, setCount] = useState(0)
  const [count , setCount] = useState(0);
  function Counter(){
    return (
      <>
        {setCount =>count++}
      </>
    );
  }
  
  return (
    <>
    {/* <Parent name='ahil' age = '21' Show = {Show} /> */}
    {/* <Parent name='hi'/> */}
    {/* <Parent /> */}
    <Parent Counter = {Counter} />
    </>
  )
}
// Parent.defaultProps = {
//   name: "ahil",
//   age: "21"
// }
export default App
