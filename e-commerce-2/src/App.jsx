//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
import Fetch from "./components/Fetch"
import PreFooter from "./components/PreFooter"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"


const App = () => {

  return(
    <div>
      <NavBar/>
      <ItemListContainer emoji={"🚧"} greeting={"Pagina en construccion"}/>
      <Fetch/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}

export default App
