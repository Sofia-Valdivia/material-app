
import React from  'react';
import { Container, Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaLima/index.css"
import countryClubLima from "../../assest/imagenes/countryClubLima.webp"
import britaniaHotelLima from "../../assest/imagenes/britaniaHotelLima.jpg"
import nobilityHotelLima from "../../assest/imagenes/nobilityHotelLima.webp"
import laRosaNauticaRest from "../../assest/imagenes/laRosaNauticaRest.jpg"
import tabernaQueirolo from "../../assest/imagenes/tabernaQueirolo.jpg"
import señorioSulco from "../../assest/imagenes/señorioSulco.jpg"
import islasPalomino from "../../assest/imagenes/islasPalomino.jpg"
import marcahuasi from "../../assest/imagenes/marcahuasi.jpg"
import lunahuana from "../../assest/imagenes/lunahuana.jpg"


const VistaLima=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Lima "Ciudad de los reyes"</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={countryClubLima}
          alt="BritaniaHotel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Country Club Hotel Lima
          </Typography>
          <Typography variant="body2" color="text.secondary">
            San Isidro
            <a href='https://www.countryclublimahotel.com'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={britaniaHotelLima}
          alt="BritaniaHotel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hotel Britania Crystal Collection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Miraflores
          </Typography>
         
        </CardContent>
         <a href='http://www.hbritaniamiraflores.com/'></a>
 </Card>  
 </Grid>
 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={nobilityHotelLima}
          alt="NobilityGrandHotelLima"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nobility Grand Hotel 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Miraflores
          </Typography>
         
        </CardContent>
         <a href='https://www.hotelnobility.com'></a>
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
        
          image={laRosaNauticaRest}
          alt="laRosaNauticaRestLima"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Rosa Nautica
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Miraflores
          </Typography>
         
        </CardContent>
         <a href='https://larosanautica.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"           
          image={tabernaQueirolo}
          alt="TabernaQueirolo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Antigua Taberna Queirolo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pueblo Libre
          </Typography>
         
        </CardContent>
         <a href='https://www.antiguatabernaqueirolo.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"        
        
          image={señorioSulco}
          alt="Señorio de Sulco"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Señorio de Sulco
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cercado de Surco
          </Typography>
         
        </CardContent>
         <a href='https://www.senoriodesulco.com/'></a>
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
          image={islasPalomino}
          alt="IslasPalomino"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tour Lobos Marinos-Islas Palomino
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Servicios Turísticos M&G S.A.C.Callao
          </Typography>
           <a href='https://www.toursmyg.com'></a>
        </CardContent>       
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"          
          image={marcahuasi}
          alt="marcahuasiLima"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Marcahuasi Bosque de Piedras
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
          Viajes Fantásticos.net           
          </Typography>         
        </CardContent>
         <a href='https://www.viajesfantasticos.net/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-costa' >  
        <CardMedia
        className="img-costa"
          component="img"           
          image={lunahuana}
          alt="Lunahuana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Lunahuana
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Paquetes y Tours a Lunahuana - Turismoi.pe
          </Typography>
        </CardContent>
         <a href='https://www.turismoi.pe'></a>
 </Card>  
 </Grid>

</Grid>
    )    
};
export default VistaLima

