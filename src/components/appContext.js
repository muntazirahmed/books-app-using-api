import {createContext,useContext} from 'react';
import {useState} from 'react';

 const AppContext=createContext(null);
export const useAppContext = ()=> {
  const context =useContext(AppContext);
  if(context===undefined){
    throw new Error("application must be in appcontext")
  } 
  return context;
  }



  const AppContextProvider =({children})=>{
  const [favourites,setfavourites]=useState([])


  const addtofavourites = (book)=>{
  const oldfavourites=[...favourites];
  const newfavourites=oldfavourites.concat(book);
  setfavourites(newfavourites);
  }

  const removefromfavourites = (id)=>{

    const oldfavourites=[...favourites];
    const newfavourites=oldfavourites.filter((book)=> book.id  !==id);
    setfavourites(newfavourites);
    
  }


     return (
       <AppContext.Provider 
       value ={{favourites,addtofavourites,removefromfavourites}}>
        {children}
       </AppContext.Provider>
     )
 }
 export default AppContextProvider;