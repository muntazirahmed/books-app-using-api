import React, {useState, useEffect} from 'react';
import '../App.css';
import {API_URL} from '../Api';
import axios from 'axios';


const Booklist = () => {

    const[books,setbooks]=useState([]);
  

    useEffect(()=>{
        axios
        .get(API_URL)
        .then(res=>{
            console.log(res.data)
            setbooks(res.data)
        }).catch((err)=>{console.log(err)})
    },[]);

  return (  
  <div className="booklist">
     {books.map((book)=>
     (<div key ={book.id} className="book">
        <div>
            <div><h3>{book.title}</h3></div>
        </div>
        <div> 
            <img src={book.image_url} alt="#"/>
        </div> 
        <div>
            <button>Add to favourites</button>
        </div>
     </div>))}
  </div>)

}

export default Booklist