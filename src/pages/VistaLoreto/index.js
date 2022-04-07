
import React from  'react';
import { Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaLoreto/index.css"
import avatarAmazonLodgeIquitos from "../../assest/imagenes/avatarAmazonLodgeIquitos.jpg"
import solOrienteIquitos from "../../assest/imagenes/solOrienteIquitos.jpg"
import cumpanamaYurimaguasPosada from "../../assest/imagenes/cumpanamaYurimaguasPosada.jpg"
import mijanoIquitosRestaurante from "../../assest/imagenes/mijanoIquitosRestaurante.jpg"
import sombreroPajaIquitosRestaurante from "../../assest/imagenes/sombreroPajaIquitosRestaurante.jpg"
import terrazaYurimaguasRestaurante from "../../assest/imagenes/terrazaYurimaguasRestaurante.jpg"
import pacayaSamiriaReservaLoreto from "../../assest/imagenes/pacayaSamiriaReservaLoreto.jpg"
import lagunaAzulLoreto from "../../assest/imagenes/lagunaAzulLoreto.jpg"
import quistocochaComplejoTuristico from "../../assest/imagenes/quistocochaComplejoTuristico.webp"


const VistaLoreto=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Loreto</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"        
        
          image={avatarAmazonLodgeIquitos}
          alt="avatarAmazonLodgeIquitos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Avatar Amazon Lodge
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Iquitos        
            <a href='https://avataramazonlodge.com/'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"        
        
          image={solOrienteIquitos}
          alt="solOrienteIquitos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel Sol del Oriente Iquitos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Iquitos
          </Typography>
         
        </CardContent>
         <a href='https://hotelessoldeloriente.com'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"            
          image={cumpanamaYurimaguasPosada}
          alt="PosadaCumpanamaYurimaguas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Posada Cumpanama-Yurimaguas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yurimaguas
          </Typography>
         
        </CardContent>
         <a href='https://posadacumpanama.com/'></a>
 </Card>  
 </Grid>
 <Grid item md={12} xs={12}>
  <h2>Restaurantes</h2>
</Grid>

<Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"        
        
          image={mijanoIquitosRestaurante}
          alt="MijanoIquitosRest"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Mijano
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Iquitos
          </Typography>
         
        </CardContent>
         <a href='http://www.restaurantelmijano.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"           
          image={sombreroPajaIquitosRestaurante}
          alt="SombreroPajaIquitos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Sombrero de Paja
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Iquitos
          </Typography>
         
        </CardContent>
         <a href='http://www.elsombrerodepaja.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia 
        className="img-selva"
          component="img"        
        
          image={terrazaYurimaguasRestaurante}
          alt="terrazaRestoBarYurimaguas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Terraza Resto-Bar-Café
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yurimaguas
          </Typography>
         
        </CardContent>
         <a href='https://restobarterraza.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={12} xs={12}>
  <h2>Tours</h2>
</Grid>

<Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"          
          image={pacayaSamiriaReservaLoreto}
          alt="Pacaya samiria Reserva"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Reserva Pacaya Samiria
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Agencia Ecoturística Tour Pacaya Samiria
          </Typography>
           <a href='https://tourpacayasamiria.com'></a>
        </CardContent>       
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"          
          image={lagunaAzulLoreto}
          alt="lagunaAzulLoreto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">          
          Tour Laguna Azul, Alto Mayo, Carpichuyaco y Ahuahuyacu.
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
        Tours Shamiro.
          </Typography>         
        </CardContent>
         <a href='https://shamirotours.com'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"           
          image={quistocochaComplejoTuristico}
          alt="Quistococha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Complejo Turístico de Quistococha
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Iquitos
          </Typography>
        </CardContent>
         <a href='https://www.peru.travel/pe/atractivos/complejo-turistico-quistococha'></a>
 </Card>  
 </Grid>

</Grid>
    )    
};
export default VistaLoreto

