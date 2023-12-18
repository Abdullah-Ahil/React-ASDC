import Child from "../child/Child";


const Parent = ({ name, age }) => {
  // Age = 21
  // Name = 'ahil'
  // func = <Show />
  // console.log('parent called ')
  return (
    <>
      {/* <h1>this is parent</h1> */}
      {/* <Child Name = 'Ahil' /> */}
      {/* <Child Name={name} Age={age} Show = {Show}/> */}
      <Child Name={name} Age={age} />
    </>
  );
};

export default Parent;
