
import Child from "../child/Child";
import Child2 from "../child2/Child2";

const Parent = ({name,age}) => {
  // Age = 21
  // Name = 'ahil'
  // func = <Show />
  // console.log('parent called ')
  return (
    <>
      {/* <h1>this is parent</h1> */}
      {/* <Child Name = 'Ahil' /> */}
      {/* <Child Name={name} Age={age} Show = {Show}/> */}
      <Child  name = {name}/>
      <Child2 age={age}/>
    </>
  );
};

export default Parent;
