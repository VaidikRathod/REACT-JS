import './App.css';
function CreatAccount(props){
 return(
    <div className='signup'>
  <div className='signA'>
  <h1>Looks like you're new here!</h1>
    <p>Sign up with your mobile number to get started</p>
    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
  </div>
  <div className='signB'>
    <form action="">
      <input type="text" placeholder='Enter Mobile nimber'/>
      <p>By continuing, you agree to Flipkart's <span className='text-[#2874F0]'>Terms of Use</span> and <span className='text-[#2874F0]'>Privacy Policy.</span></p>
      <button className='submit'>COUNTINUE</button>
      <br/>
      <button className='signupbutton' onClick={()=>props.a}>Existing User? log in</button>
     
    </form>
  </div>
  </div>
 )
}

export default CreatAccount