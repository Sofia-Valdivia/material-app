
import React from  'react';
import { Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaCusco/index.css"
import casaSanBlasBoutiqueCusco from "../../assest/imagenes/casaSanBlasBoutiqueCusco.jpg"
import wifalaHarmonyUrubamba from "../../assest/imagenes/wifalaHarmonyUrubamba.jpg"
import amaruColonialCusco from "../../assest/imagenes/amaruColonialCusco.jpg"
import cusquenitaPicanteriaCusco from "../../assest/imagenes/cusquenitaPicanteriaCusco.jpg"
import yakuCocinaCusco from "../../assest/imagenes/yakuCocinaCusco.jpg"
import inkaGrillCusco from "../../assest/imagenes/inkaGrillCusco.jpg"
import montanaSieteColoresCusco from "../../assest/imagenes/montanaSieteColoresCusco.jpg"
import machupicchuSierra from "../../assest/imagenes/machupicchuSierra.jpg"
import valleSagradoInkasCusco from "../../assest/imagenes/valleSagradoInkasCusco.jpg"


const VistaCusco=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Cusco</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={casaSanBlasBoutiqueCusco}
          alt="Hotel Casa San Blas Boutique"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel Casa San Blas Boutique
          </Typography>
          <Typography variant="body2" color="text.secondary">
            San Blas Cusco
            <a href='https://www.casasanblas.com/es/'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"        
        
          image={wifalaHarmonyUrubamba}
          alt="Wifala Harmony Hotel-Urubamba"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
            Wifala Harmony Hotel-Urubamba (Ecológico)

          </Typography>
          <Typography variant="body2" color="text.secondary">
            Urubamba Cusco
          </Typography>
         
        </CardContent>
         <a href='https://wifala-harmony-hotel.negocio.site/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"            
          image={amaruColonialCusco}
          alt="Amaru Colonial Cusco"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Amaru Colonial
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cusco
          </Typography>         
        </CardContent>
         <a href='http://amaru-colonial.cuscohotelsweb.com/es/'></a>
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
          image={cusquenitaPicanteriaCusco}
          alt="La Cusqueñita-Picantería Tradicional."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Cusqueñita-Picantería Tradicional.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cusco
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia 
        className="img-sierra"
          component="img"        
        
          image={yakuCocinaCusco}
          alt="Yaku Cocina de Altura"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Yaku Cocina de Altura
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cusco
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"           
          image={inkaGrillCusco}
          alt="Inka Grill Restaurant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Inka Grill Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cusco
          </Typography>
         
        </CardContent>
         <a href='https://carta.menu/restaurants/cusco/inka-grill-2'></a>
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
          image={montanaSieteColoresCusco}
          alt="montañaSieteColores"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Montaña de los Siete Colores- Vinicunca
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wild Peru Travels
          </Typography>
        </CardContent>
         <a href='https://www.wildperutravels.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={machupicchuSierra}
          alt="Machupicchu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">          
          Machupicchu, Maravilla del Mundo
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
        Condor Travel Agencia de Viajes
          </Typography>         
        </CardContent>
         <a href='https://condortravel.com/es/'></a>
 </Card>  
 </Grid>

<Grid item md={4}>
<Card className='card-sierra' >  
        <CardMedia
        className="img-sierra"
          component="img"          
          image={valleSagradoInkasCusco}
          alt="Valle Sagrado Cusco"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          OllantayTambo, Valle Sagrado de los Inkas
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Valle Sagrado Cusco
          </Typography>
           <a href='https://www.fiestatoursperu.com'></a>
        </CardContent>       
 </Card>  
 </Grid>
 
</Grid>
    )    
};
export default VistaCusco

