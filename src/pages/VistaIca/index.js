
import React from  'react';
import { Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaIca/index.css"
import aranwaIcaHotel from "../../assest/imagenes/aranwaIcaHotel.jpg"
import vinasQueiroloIcaHotel from "../../assest/imagenes/vinasQueiroloIcaHotel.jpg"
import curasiIcaHotel from "../../assest/imagenes/curasiIcaHotel.jpg"
import laOlladeJuanitaIca from "../../assest/imagenes/laOlladeJuanitaIca.jpg"
import cordonRosaIcaRest from "../../assest/imagenes/cordonRosaIcaRest.jpg"
import tamboTacamaIcaRest from "../../assest/imagenes/tamboTacamaIcaRest.jpg"
import reservaParacas from "../../assest/imagenes/reservaParacas.jpg"
import cityTourIca from "../../assest/imagenes/cityTourIca.jpg"
import huacachinaIca from "../../assest/imagenes/huacachinaIca.jpg"


const VistaIca=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Ica: pisco, playas, un oasis...</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={aranwaIcaHotel}
          alt="BritaniaHotel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel Aranwa Paracas Resort &Spa
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Paracas           

            <a href='https://www.aranwahotels.com'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={vinasQueiroloIcaHotel}
          alt="HotelVinasQueiroloIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hotel Viñas Queirolo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ica
          </Typography>
         
        </CardContent>
         <a href='https://www.hotelvinasqueirolo.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={curasiIcaHotel}
          alt="CurasiHuacachinaIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Curasi Hotel 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Huacachina-Ica
          </Typography>
         
        </CardContent>
         <a href='https://www.huacachinacurasi.com'></a>
 </Card>  
 </Grid>
 <Grid item md={12} xs={12}>
  <h2>Restaurantes</h2>
</Grid>

<Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={laOlladeJuanitaIca}
          alt="OllaJuanitaIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Olla de Juanita
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Restaurante Campestre Ica
          </Typography>
         
        </CardContent>
         <a href='https://laolladejuanita.com'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"           
          image={cordonRosaIcaRest}
          alt="TabernaQueirolo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Cordón y la Rosa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ica
          </Typography>
         
        </CardContent>
         <a href=''></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={tamboTacamaIcaRest}
          alt="TamboTacamaIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Tambo de Tacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            La Tinguiña Ica
          </Typography>
         
        </CardContent>
         <a href='https://www.tacama.com'></a>
 </Card>  
 </Grid>

 <Grid item md={12} xs={12}>
  <h2>Tours</h2>
</Grid>

<Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"          
          image={reservaParacas}
          alt="Paracas Reserva"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Reserva Nacional de Paracas
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Emotion Tour Peru
          </Typography>
           <a href='https://www.emotiontourperu.com/'></a>
        </CardContent>       
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"          
          image={cityTourIca}
          alt="cityTourIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          City Tour Ica
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
          Kullay Travel Agencia de Viajes y Turismo         
          </Typography>         
        </CardContent>
         <a href='https://kullaytravelperu.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"           
          image={huacachinaIca}
          alt="huacachinaIca"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Laguna de la Huacachina
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HuacachinaTours
          </Typography>
        </CardContent>
         <a href='https://www.huacachinatours.com'></a>
 </Card>  
 </Grid>

</Grid>
    )    
};
export default VistaIca

