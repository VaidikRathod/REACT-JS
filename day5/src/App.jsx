
import { useState } from 'react';
import './App.css';
import CreatAccount from './creatAccount';

function App() {

  let [state,setState]=useState("hide")
  return (<div>
  <div className="App">
   {state=="hide"?<div className='login'>
   <div className='logA'>
    <h1>Login</h1>
    <p>Get access to your Orders, Wishlist and Recommendations</p>
    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
   </div>
   <div className='logB'>
    <form action="">
      <input type="text" placeholder='Enter Email/Mobile nimber'/>
      <p>By continuing, you agree to Flipkart's <span className='text-[#2874F0]'>Terms of Use</span> and <span className='text-[#2874F0]'>Privacy Policy.</span></p>
      <button className='submit'>Request OTP</button>
      <br/>
      <button className='loginbutton' onClick={()=>setState("show")}>New to Flipkart? Create an account</button>
     
    </form>
   </div></div> :<CreatAccount a={state} /> }
  </div>
  </div>
 
  );
}

export default App;
