import React from 'react'

const Page2 = () => {
  
  return (
    <div class="container form-control h-100" >
       <img src="FoodPanda-Logo.png" class="" alt="" width={120} height={70} style={{marginLeft:190,}}/>
        <h1 style={{fontSize:20}}>Login</h1>
        <span>or </span>
        <a href="/Signup" className='pink'>create an account</a>
        <hr />
        <form action="" method="">
        <div class="form-group">
       <input type="number"  name="" id="txt1"  class="form-control w-90"  placeholder='Phone Number' required/><br />
       <input type="submit" value="Login" className="login"/>
       <input type="text"  name="" id="txt2"  class="form-control w-90" placeholder='OTP' required style={{marginTop:10}}  /><br />
      
      </div>

        </form>
      
       </div>
  
  )
}

export default Page2