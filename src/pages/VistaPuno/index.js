
import React from  'react';
import { Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaPuno/index.css"
import urosAruntawiLodgePuno from "../../assest/imagenes/urosAruntawiLodgePuno.jpg"
import qalasayaHotelPuno from "../../assest/imagenes/qalasayaHotelPuno.jpg"
import colonialPlazaHotelPuno from "../../assest/imagenes/colonialPlazaHotelPuno.jpg"
import mojsaRestaurantePuno from "../../assest/imagenes/mojsaRestaurantePuno.jpg"
import tableDelInkaRestaurantePuno from "../../assest/imagenes/tableDelInkaRestaurantePuno.jpg"
import grillEstanciaPuno from "../../assest/imagenes/grillEstanciaPuno.jpg"
import chullpasSillustaniPuno from "../../assest/imagenes/chullpasSillustaniPuno.jpg"
import catedralPuno from "../../assest/imagenes/catedralPuno.jpg"
import islasUrosTaquilePuno from "../../assest/imagenes/islasUrosTaquilePuno.jpg"



const VistaPuno=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Puno</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={urosAruntawiLodgePuno}
          alt="UrosAruntawiLodge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Uros Aruntawi Lodge
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
            <a href='https://uros-aruntawi-lodge-puno.hotelmix.es/'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"        
        
          image={qalasayaHotelPuno}
          alt="Qalasaya Hotel Puno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel Qalasaya
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
          </Typography>
         
        </CardContent>
         <a href='https://www.hotelqalasaya.com'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"            
          image={colonialPlazaHotelPuno}
          alt="ColonialPlazaHotelPuno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel Colonial Plaza 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
          </Typography>
         
        </CardContent>
         <a href='https://colonialplazahotel.com/'></a>
 </Card>  
 </Grid>
 <Grid item md={12} xs={12}>
  <h2>Restaurantes</h2>
</Grid>

<Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"        
        
          image={mojsaRestaurantePuno}
          alt="MOjsaRestaurantePuno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mojsa Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/mojsarestaurant/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia 
        className="img-sierra"
          component="img"        
        
          image={tableDelInkaRestaurantePuno}
          alt="TableInkaPuno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Table del Inka
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/latabledelinca/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"           
          image={grillEstanciaPuno}
          alt="GrillEstanciaPuno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Casa Grill La Estancia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Puno
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/casagrill.puno/'></a>
 </Card>  
 </Grid>

 

 <Grid item md={12} xs={12}>
  <h2>Tours</h2>
</Grid>

<Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={chullpasSillustaniPuno}
          alt="CHullpas de Sillustani-Puno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chullpas de Sillustani
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Puno Tours
          </Typography>
           <a href='https://www.punotours.com.pe'></a>
        </CardContent>       
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"           
          image={catedralPuno}
          alt="CatedralPuno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          City Tour Puno
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Puno Tours
          </Typography>
        </CardContent>
         <a href='https://www.punotours.com.pe'></a>
 </Card>  
 </Grid>


 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={islasUrosTaquilePuno}
          alt="IslasFlotantes-Puno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">          
          Islas Flotantes de los Uros, islas Taquile y Amantani
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
        Puno Tours
          </Typography>         
        </CardContent>
         <a href='https://www.punotours.com.pe'></a>
 </Card>  
 </Grid>

 
</Grid>
    )    
};
export default VistaPuno

