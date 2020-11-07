import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  var [movieName,setMovieName] = useState("");
  var [review,setReview] = useState("");
  var [movieReviewList,setMoviewList]=useState([]);

  var [newReview,setNewReview]=useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMoviewList(response.data);
    });
  });

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
  
  var deleteReview =(movieName)=>{
    Axios.delete('http://localhost:3001/api/delete/${movieName}');

  };

  var updateReview =(movie)=>{
    Axios.put("http://localhost:3001/api/update",{
      movieName:movie,
      movieReview: newReview,
    });
    setNewReview("")
  };
  return (
    <div className="App">
      <h1>Movie Review Site</h1>
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

        {
          movieReviewList.map((val) => {
            return (
              <div className="card">
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

export default App;
