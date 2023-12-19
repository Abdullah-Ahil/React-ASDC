
import { useState } from 'react';
import './App.css'
import Form from './components/form/Form';
// import Parent from './components/parent/Parent'

function App() {
  // const [count, setCount] = useState(0)
  const [count , setCount] = useState(0);
  function Counter(){
     return (
       <>
        {setCount(count + 1)}
        {console.log(count)}
         
       </>
     );
   }
   let obj = {
    name : 'ahil',
    age : 21,
   }
   log = false
  function validate(){
    return(
      log ?  <h3>you are Logged In</h3> : <h3>Logged out</h3>
      // {name ? <h3>name : {name}</h3> : <h3>no value</h3>}
    )
  }
  return (
    <>
    {/* <Counter/> */}
    {/* <Parent name='ahil' age = '21'  /> */}
    {/* <Parent name='hi'/> */}
    {/* <Parent /> */}
    {/* <Parent   {...obj}/> */}
    <p>hi</p>
    <Form validate = {validate} log = {log}/>

    </>
  )
}
// Parent.defaultProps = {
//   name: "ahil",
//   age: "21"
// }
export default App
