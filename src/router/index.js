import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../layouts/Header/Header";
import Atractivos from "../pages/Atractivos"
import Form from "../pages/Form/form";


const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>
        <Routes>
<Route>
   <NavBar/>
   <Route path="/" element={<Atractivos />} />
   <Route path="form" element={<Form />} />   


</Route>       
       </Routes>
     </BrowserRouter>
   );
 };
 export default Router;