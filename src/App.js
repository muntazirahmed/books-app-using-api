import {Routes,Route} from 'react-router-dom'
import './App.css';
import Booklist from './components/Booklist';
import Bookdetails from './components/Bookdetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';


function App() {
  return (
    <div >
      <Navbar/>
   <Routes>
    <Route path="/" element={<Booklist/>}/>
    <Route path="/book/:id" element={<Bookdetails/>}/>
    <Route path="/Favourites" element={<Favourites/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
