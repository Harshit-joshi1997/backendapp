import { useRef, useState } from 'react'
import './App.css'


function App() {
const[count,setCount]=useState(0)
const[num,setNum]=useState(0)

const inputNumber = useRef(0)
const inputText   = useRef(0)


const getNumber = ()=>{
 console.log("hello");
 console.log(inputNumber.current);
   }

  const getText = ()=>{
    console.log("Welcome");
    console.log(inputText.current); 
  }

  return (
<>
<h2>React Hooks : {count}</h2>
<input 
ref={inputNumber}
value={count}
type="number" 
onChange={(e)=>setCount(e.target.value)}/>
<button onClick={getNumber}>Click </button>

<h3>My Score is {num}</h3>
<input 
ref={inputText}
value={num}
type="text" 
onChange={(e)=>setNum(e.target.value)}/>
<button onClick={getText}>Press</button>
</>

  );
}

export default App
