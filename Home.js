import React from 'react'

const Home = () => {
  return (
    <div>
       <header class="row-10">
      <div class="container-fluid col-10" >
      <nav class="navbar navbar-expand-xl navbar-inverse" id="navbar">
        <img src="FoodPanda-Logo.png" class="" alt="" width={120} height={70} style={{marginLeft:10}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img src="Hamburger Button.jpg" alt="" className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
           
          <ul className="navbar-nav ml-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{color:"white",fontSize:20,fontWeight:"bold",}}>FoodPanda Corporate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About" style={{color:"white",fontSize:20,fontWeight:"bold",}}>Partner with us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service" style={{color:"white",fontSize:20,fontWeight:"bold",}}>Get the App</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-warning rounded text-light"  href="/Page2" style={{padding:10}}>sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
 
    <section class="container-fluid" className="home">
    <div className="row form-group"/>
    <div style={{marginLeft:200,marginTop:30}}>
    <span style={{color:'white',fontFamily:"sans-serif",fontSize:40,marginLeft:170}}>Discover the best food & drinks in foodpanda</span>
    <input type="text" name="" id="" className="form-control" placeholder="Enter your delivery location" style={{width:300,padding:20,marginTop:101,marginLeft:180}}/>
    <input type="search" className="form-control"   placeholder="Search for restaurant, item or more" style={{width:400,padding:20,marginTop:-40,marginLeft:500,}} />
   
    </div>
    </section>
    </header>
    <br /><br />
    <section class="col">
     <span style={{fontWeight:"bold",marginLeft:20,fontSize:20}} >Order our best food options</span>
     <div class="card-deck">
     <a href=""><img src="Biryani.avif" alt="" width={200} height={200} style={{marginLeft:40}}/></a>
     <a href=""><img src="Pizza.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Burger.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Parotta.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Chinese.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Cake.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Dosa.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Ice Cream.avif" alt="" width={200} height={200} style={{marginLeft:20}} /></a>
     <a href=""><img src="Idli.avif" alt="" width={200} height={200} style={{marginLeft:20}}/></a>
     <a href=""><img src="Kebab.avif" alt="" width={200} height={200} style={{marginLeft:20}}/></a>
     <a href=""><img src="Paratha.avif" alt="" width={200} height={200} style={{marginLeft:20}}/></a>
     </div>
    </section><br />
    <br />
    <section className='Banner' class="row" style={{backgroundColor:'black',padding:100}}>
    <div class="cols" style={{display:"list-item"}}>
    <img src="FoodPanda-Logo.png" alt="" width={190}  style={{marginLeft:300}}/><br />
    <span style={{color:"white",marginLeft:300,fontFamily:"Arial Black",fontSize:50}}>Get the foodpanda App Now!</span><br />
    <span style={{color:"wheat",marginLeft:300,fontFamily:"TimesNewRoman",fontSize:20}}>For best offers and discounts curated specially for you</span>
    </div> 
    </section>
    <div class="container-fluid" style={{}}>
    <h3>Cities with food delivery</h3>
      <div class="col">
        <div class="card-deck">
    <div class="card" style={{borderRadius:20,marginLeft:10}}>
      <img class="card-img-top" src="holder.js/100x180/" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Bangalore</a>
      </div>
    </div>
    <div class="card" style={{width:300,borderRadius:20,marginLeft:10}}>
      <img class="card-img-top" src="holder.js/100x180/" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Gurgaon</a>
      </div>
    </div>
    <div class="card" style={{width:300,borderRadius:20,marginLeft:10}}>
      <img class="card-img-top" src="holder.js/100x180/" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Hyderabad</a>
      </div>
    </div>
    <div class="card" style={{width:300,borderRadius:20,marginLeft:10}}>
      <img class="card-img-top" src="holder.js/100x180/" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Delhi</a>
      </div>
    </div>
    
        </div>
        <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:-11,marginTop:10}}>
      <img class="card-img-top" src="" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Mumbai</a>
      </div>
    </div>  
      </div>
      <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:420,marginTop:-80,}}>
      <img class="card-img-top" src="" alt=""/>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Pune</a>
      </div>
    </div> 
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:840,marginTop:-80,}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Kolkata</a>
      </div>
    </div>
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:1246,marginTop:-80,}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Chennai</a>
      </div>
    </div>
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginTop:10}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Ahmedabad</a>
      </div>
    </div>
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:420,marginTop:-80}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Chandigarh</a>
      </div>
    </div>  
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:850,marginTop:-80}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Jaipur</a>
      </div>
    </div>
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:1260,marginTop:-80}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Kochi</a>
      </div>
    </div>      
    <div class="card" style={{width:400,borderRadius:20,marginTop:20}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in coimbatore</a>
      </div>
    </div>      
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:420,marginTop:-80}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Lucknow</a>
      </div>
    </div>    
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:850,marginTop:-80}}>
      <div class="card-body">
        <a href="" class="btn stretched-link">order food online in Nagpur</a>
      </div>
    </div>   
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginLeft:1260,marginTop:-80}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Vadodara</a>
      </div>
    </div> 
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginTop:10}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Indore</a>
      </div>
    </div>
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginTop:-80,marginLeft:420}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Guwahati</a>
      </div>
    </div> 
    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginTop:-80,marginLeft:850}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Vizag</a>
      </div>
    </div> 

    <div class="card" style={{width:400,borderRadius:20,borderRadius:20,marginTop:-80,marginLeft:1260}}>
      <div class="card-body">
      <a href="" class="btn stretched-link">order food online in Surat</a>
      </div>
    </div> 
    </div>
    
    <br /><br />
    <footer>
      <div class="col">
      <img src="FoodPanda-Logo.png" alt="" width={120} height={70} style={{marginLeft:20}}  />
      <span style={{marginLeft:20}}>@2024 foodpanda Limited</span>
      <span style={{marginLeft:140}}>Company</span>
      <span style={{marginLeft:140}}>Contact us</span>
      <span style={{marginLeft:140}}>Available in:</span>
      <span style={{marginLeft:140}}>Life at foodpanda</span>
      <ul style={{display:'list-item',marginLeft:450,listStyle:'none'}}>
      <li>
        <a href="">About us</a>
        <a href="" style={{marginLeft:140}}>Help & support</a>
        <a href="" style={{marginLeft:110}}>Bangalore</a>
        <a href="" style={{marginLeft:140}}>Export with foodpanda</a>
        </li>  
      <li>
        <a href="">foodpanda corporate</a>
        <a href="" style={{paddingLeft:50}} >Partner With Us</a>
        <a href="" style={{paddingLeft:110}} >Gurgaan</a>
        <a href="" style={{paddingLeft:155}} >foodpanda News</a>
      </li>
      <li>
        <a href="" class>Careers</a>
        <a href="" style={{paddingLeft:150}} >Ride with us</a>
        <a href="" style={{paddingLeft:133}} >Hyderabad</a>
        <a href="" style={{paddingLeft:135}} >Snakables</a>
      </li>
      <li>
        <a href="" class>Team</a>
        <a href="" style={{paddingLeft:385}}>Mumbai</a>
      </li>
      <li>
        <a href="" class>Foodpanda One</a>
        <a href="" style={{paddingLeft:310}} >Pune</a>
      </li>
      <li>
        <a href="" class>Foodpanda Instamart</a>
      </li>
      <li>
        <a href="" class>Foodpanda Dineout</a>
      </li>
      <li>
        <a href="" class>Foodpanda Genie</a>
      </li>
      <li>
        <a href="" class>Minis</a>
      </li>
      </ul>
      <div class="row">
       
      </div>
      </div>
    </footer> 
    </div>
  )
}

export default Home