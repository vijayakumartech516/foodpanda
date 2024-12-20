import React from 'react'

const food = () => {
  return (
    <div className="App">
     
  <header>
      <div class="container-fluid col-15" >
       <nav class="navbar navbar-expand-xl navbar-inverse" id="navbar">
       <img src="FoodPanda-Logo.png" alt="" width={100} height={50}/>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <img src="Hamburger Button.jpg" alt="" className="navbar-toggler-icon"/>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           
           <ul className="navbar-nav ml-auto mb-lg-0">
             <li className="nav-item">
               <a className="nav-link" href="/">FoodPanda Corporate</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#About">Partner with us</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#service">Get the App</a>
             </li>
             <li className="nav-item">
               <a className="nav-link bg-primary rounded text-light"  href="#">sign in</a>
             </li>
           </ul>
         </div>
       </nav>
     </div>
     </header>
     <section className="home">
     <div className="row form-group"/>
     <div style={{marginLeft:380,marginTop:30}}>
     <input type="text" name="" id="" className="form-control" placeholder="Enter your delivery location" style={{width:300,padding:20,marginTop:100,marginLeft:60}}/>
     <input type="search" className="form-control"   placeholder="Search for restaurant, item or more" style={{width:400,padding:20,marginTop:-40,marginLeft:400,}} />
     </div>
     </section>
     <br />
    
     </div>
  )
}

export default food