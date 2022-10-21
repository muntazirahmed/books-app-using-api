import React, {useState, useEffect} from 'react';
import '../App.css';
import {API_URL} from '../Api';
import axios from 'axios';
import {useAppContext} from './appContext'


const Booklist = () => {

    const[books,setbooks]=useState([]);
  
const{favourites,addtofavourites,removefromfavourites}=useAppContext();
console.log(favourites);

const favouriteschecker =(id)=>{const boolean=favourites.some((book)=>book.id===id)
return boolean}


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
            {favouriteschecker(book.id) ?
            ( <button onClick={()=>removefromfavourites(book.id)}>
                remove from favourites</button>)
               :
               (<button onClick ={()=> addtofavourites(book)}>add  favourites</button>)}
           
        </div>
     </div>))} 
  </div>)

}

export default Booklist