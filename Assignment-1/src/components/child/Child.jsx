
function Child({name}){
    // console.log('child called ')
    return(
        <>
        {/* <span>{Show()}</span>
        <h1>this is child</h1>
        <h1>{Name}</h1>
        <p>{Age}</p> */}
        {/* <h1>Name:{Name}</h1>
        <p>Age:{Age}</p> */}
        {/* <p>{count} times clicked</p>
        <button onClick={Counter}>clicked</button>
        <h5>modifying value of count by -2 : {count - 2}</h5> */}
        {name ? <h3>name : {name}</h3> : <h3>no value</h3>}

        </>
    )
}
export default Child;