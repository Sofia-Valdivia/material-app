import React from "react"
import {AppBar,Grid,styled,Toolbar,Typography,} from "@mui/material"
import logoCode from "../../assest/imagenes/logoCode.svg"
import "../Header/Header.css"


{/*assest/imagenes/logoCode.svg*/}

const Navbar=()=>{
  
    return(  
    
    <AppBar  position="static" >
       <Grid  container alignItems="center" ml={5} mr={5}>
      <Toolbar>
        
      <img src={logoCode} width={60} alt="" />
       
        <Typography variant="h6" >
           A tu lado en este viaje...
        </Typography>
        <Grid className="proof"  item >
          <ul className="menu-barra" >
            <li>
              <a href="#"> Inicio</a>{" "}
            </li>
            <li>
              <a href="#"> Nosotros</a>
            </li>
            <li>
              <a href="#"> Contactanos</a>
            </li>
          </ul>  
            </Grid>
      </Toolbar>
      </Grid>
    </AppBar>

  



)
}
export default Navbar