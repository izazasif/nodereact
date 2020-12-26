import React ,{useState,useEffect} from 'react';
import Axios from "axios";
import './Home.css';


function Home()

{   
    var [iteamList,setiteamList]=useState([]);
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/home/get").then((response)=>{
           setiteamList(response.data);
          //  console.log(response.data);
          
        });
      },[]);
    return (
        <div class="container">
      
            {
   iteamList.map((val) => {
     return (
      <div class="card">
      <div class="imgBx">
      <img
                  src={require(`${val.productsImage}`)}
                  alt="item"
                />
      </div>
      <div class="details">
        <div class="content">
          <h2>{val.productName}<br/>
            <span> Price : {val.productPrice} BDT.</span><br></br>
            <span> Catagory : {val.productsType} </span>
          </h2>
          <ul>
            <li><a href="#">FB</a></li>
            <li><a href="#">TW</a></li>
            <li><a href="#">YT</a></li>
            <li><a href="#">IN</a></li>
          </ul>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
       
     );
   })}
        </div>

  // <div class="container">
  // <img src={`http://localhost:3001/uploads/${val.productsImage}`}/>
  // <div class="card">
  //   <div class="imgBx">
  //     <img src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80" alt=""/>
  //   </div>
  //   <div class="details">
  //     <div class="content">
  //       <h2>Your Name<br/>
  //         <span>Founder of LoremIpsum</span>
  //       </h2>
  //       <ul>
  //         <li><a href="#">FB</a></li>
  //         <li><a href="#">TW</a></li>
  //         <li><a href="#">YT</a></li>
  //         <li><a href="#">IN</a></li>
  //       </ul>
  //       <a href="#">Read More</a>
  //     </div>
  //   </div>
  // </div>
  // </div>
    )
    
}

export default Home;