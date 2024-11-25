import { useState } from 'react';
import './App.css';
import Counter1 from './counter1';
import Counter2 from './counter2'


function App() {
  let [count,setCount] = useState(0)
  
  

  function increase(){
    setCount(count + 1)

  }

  function decrease(){
    setCount(count - 1)
    if(count <= 0){
       setCount(0)
    }
    
  }

  return (
    <center>
    <h1>Counter</h1>
    <div className="App">
      <button onClick={decrease} id='btn1'>-</button>   
      <Counter1 a = {count}/>
      
      <button onClick={increase} id='btn1'>+</button>

    </div>
    </center>
  );
}

export default App;
