
export default function Form({validate,log}) {
  return (
   <>
   <p>from</p>
    <form action="">
        
        <input type="text" placeholder='Name' />
        <input type="password" placeholder='Password' />
        
        <button onClick={()=>{log=true;
            validate }}></button>
    </form></>
  )
}
