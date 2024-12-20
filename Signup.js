import React from 'react'

const Signup = () => {
  return (
    <div>
        <div class="container form-control h-100" >
       <img src="FoodPanda-Logo.png" class="" alt="" width={120} height={70} style={{marginLeft:190,}}/>
        <h1 style={{fontSize:20}}>Signup</h1>
        <span>or </span>
        <a href="/Page2" className='pink'>login to your account</a>
        <hr />
        <form action="" method='post'>
        <div class="form-group" style={{display:'list-item',listStyle:"none",}}>
       <input type="text"  name="" id=""  class="form-control w-90" placeholder='Phone Number' style={{height:50,marginTop:20}} required/>
       <input type="text"  name="" id=""  class="form-control" placeholder='Name' style={{height:50,marginTop:20}}/>
       <input type="email" name="" id="" class="form-control" placeholder='Email' style={{height:50,marginTop:20}} />
       <a href="">Have a referral code?</a>
       <input type="submit" value="Continue"   class=" form-control" className="signup" />
      </div>

        </form>
     
       </div>
    </div>
  )
}

export default Signup