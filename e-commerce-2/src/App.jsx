import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
//import Fetch from "./components/Fetch"
import PreFooter from "./components/PreFooter"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import SummerLooks from "./components/SummerLooks";
import Coleccion from "./components/Coleccion";
import GiftCard from "./components/GiftCard";
import BeautySpa from "./components/BeautySpa";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {

  return(
    <BrowserRouter>
      <NavBar/>
      <ItemDetailContainer/>
      
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/summerLooks" element={<SummerLooks/>} />
        <Route path="/coleccion" element={<Coleccion/>} />
        <Route path="/beauty&Spa" element={<BeautySpa/>} />
        <Route path="/giftCard" element={<GiftCard/>} />
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      <PreFooter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
