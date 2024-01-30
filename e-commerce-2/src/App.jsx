import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
import PreFooter from "./components/PreFooter"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      <PreFooter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
