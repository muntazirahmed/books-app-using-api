import {createContext,useContext} from 'react';
import {useState} from 'react'


 const AppContext=createContext(null);

 export const useAppContext=()=>{
    const context =useContext(AppContext);
    if (context===undefined){
        throw new Error("hello")
    }
    return context;
 }


 const AppContextProvider= ({children}) ={
    const [favourites,setfavourites]=useState([]);

    const addtofavourites =()=>{

    }
  const removefromfavourites =(id) =>{

  }

   
    return (
    <AppContext.Provider values ={{favourites,removefromfavourites,addtofavourites }}>
    {children}
    </AppContext.Provider>
)
 }
 export default AppContextProvider;


