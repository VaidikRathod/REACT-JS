import React, { useState,useRef} from 'react'
import Logic from './logic';

function Form() {
      var vara = useRef("");
      var varb = useRef("");
      var varc = useRef("");

       const [arr,setarr] = useState([])
       

       const handleSubmit = (e)=>{
         e.preventDefault()
         const state={
            title : vara.current.value ,
            img : varb.current.value ,
            price: varc.current.value 
         }
        setarr([...arr,state])
       }
       console.log(arr)
    
  return (
    <>
    <div id='main'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Title' ref={vara} required/> <br /><br />
            <input type="text" name='img' placeholder='Image URL' ref={varb} /> <br /><br />
            <input type="text" name='price' placeholder='Price' ref={varc} /> <br /><br />
            <input type="submit"/>
        </form> 
        
        </div>
        <Logic data={arr}/>
    </>
  )
}

export default Form