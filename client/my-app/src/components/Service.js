import React, { useState } from 'react';
import './service.css';
import Axios from "axios";


function Service (){
    
        var [productName,setproductName] = useState("");
        var [productPrice,setproductPrice] = useState("");
        var [productDescription,setproductDescription] = useState("");
        var [productsType,setproductsType] = useState("");
        var [productsImage,setproductsImage] = useState("");

        var fileOnChnage =(e)=>{
            setproductsImage(e.target.files[0]);
        };

        var createIteam = ()=>{
            var data = new FormData();
            data.append("productName", productName); 
            data.append("productPrice", productPrice);
            data.append("productDescription", productDescription); 
            data.append("productsType", productsType);
            data.append("productsImage", productsImage); 
            Axios.post("http://localhost:3001/api/service/insert",data)
        

            .then(res => res.text()) 
            .catch(err => console.log(err));
        };
        
                // productName: productName,
                // productPrice:productPrice,
                // productDescription:productDescription,
                // productsType:productsType,
                // productsImage:productsImage,
        //    };
       

    return(
        
        <div className="product">
            <h3>Create Iteam Here !</h3>
            <br/>
            <div className="form1">
                <div className="form input">
            <label>Product Name</label>
            <input type="text" name="productName" onChange={(e)=>{
   setproductName(e.target.value);}}/>
           <label>Product Price</label>
             <input type="text" name="productPrice" onChange={(e)=>{
   setproductPrice(e.target.value);}}/>
             <label>Product Description</label>
             <input type="text" name="productDescription" onChange={(e)=>{
   setproductDescription(e.target.value);}}/>
             <br/>
     <label for="products">Choose Product Type </label>
        <select id="productsType" onChange={(e)=>{
   setproductsType(e.target.value);}}>
       <option value="gadget">Gadget</option>
       <option value="cloth">cloth</option>
        <option value="cap">cap</option>
        <option value="art">Art</option>
       <option value="others">Others</option>
               </select>
        <br/>
             <label>Product Image</label>
             <input type="file" name="productsImage" onChange={fileOnChnage}/>
           <button onClick={createIteam} >Submit</button>
   </div>
            </div>
        </div>

    );
    }

export default Service;