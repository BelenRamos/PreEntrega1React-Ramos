import Footer from "./components/Footer"
import PreFooter from "./components/PreFooter"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"


const App = () => {

  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Pagina en construccion"}/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}

export default App
