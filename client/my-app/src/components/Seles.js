import React, { useState, useEffect  } from 'react';
import Axios from "axios";
import './Seles.css';



function Seles () {
   
var [movieName,setMovieName] = useState("");
  var [review,setReview] = useState("");
  var [movieReviewList,setMoviewList]=useState([]);
  var [newReview,setNewReview]=useState("");
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMoviewList(response.data);
    });
  });
  // var search=(val)=>{
    
  //   Axios.get('http://localhost:3001/api/get='+val).then((response)=>{
  //    showMoviews(response.data);
  //    console.log(response.data);
  //   });
    
  // };

 
  var submitReview = ()=>{
   Axios.post("http://localhost:3001/api/insert",{ 
     movieName: movieName,
     movieReview:review,
   });
  //  then(()=> {
  //    alert("successfull")
  //  });
  setMoviewList([...movieReviewList,{ movieName: movieName,movieReview: review},]);
  };
  
  var deleteReview =(movie)=>{
    Axios.delete('http://localhost:3001/api/delete/'+movie);

  };

  var updateReview =(movie)=>{
    Axios.put("http://localhost:3001/api/update",{
      movieName:movie,
      movieReview: newReview,
    });
    setNewReview("")
  };
    return(
        
   <div className="Dept">
   <div className="form">
 <label>Movie Name</label>
 <input type="text" name="movieName" onChange={(e)=>{
   setMovieName(e.target.value);
 }}/>
 <label>Movie Review</label>
 <input type="text" name="review" onChange={(e) =>{
   setReview(e.target.value);
 } }/>
 <button onClick={submitReview}>Submit</button>
</div>

<div className="carBAck">
 {
   movieReviewList.map((val) => {
     return (
       <div className="card" >
       <h1>
         MovieName : {val.movieName}
         </h1>
         <p>MovieReview : {val.movieReview}</p>

         <button onClick={()=>{deleteReview(val.movieName)}}>Delete</button>
         <input type="text" id="updateInput" onChange={(e)=>{setNewReview(e.target.value)}}/>
         <button onClick={()=> {updateReview(val.movieName)}}>update</button>
         </div>
     );
   })}
 </div>
   </div>

    );

}



export default Seles;