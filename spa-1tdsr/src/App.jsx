import Cabecalho from "./components/Cabecalho";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg"
import { Outlet } from "react-router-dom";

export default function App() {



  return(
    <>
    <div className="container">
  
       <Cabecalho/>
        <Outlet/>
        <Rodape/>
    
    </div>
    </>
  )
}