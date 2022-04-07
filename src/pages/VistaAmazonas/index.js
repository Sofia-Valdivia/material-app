
import React from  'react';
import { Card, CardContent, CardMedia, Grid, Typography,} from "@mui/material";
import "../VistaAmazonas/index.css"
import mamaqTamboLodgeAmazonas from "../../assest/imagenes/mamaqTamboLodgeAmazonas.jpg"
import tamboSapalachanLodgeAmazonas from "../../assest/imagenes/tamboSapalachanLodgeAmazonas.jpg"
import ensenadaHotelChachapoyasAmazonas from "../../assest/imagenes/ensenadaHotelChachapoyasAmazonas.jpg"
import elTejadoRestAmazonas from "../../assest/imagenes/elTejadoRestAmazonas.jpg"
import elBatanDelTaytaRestAmazonas from "../../assest/imagenes/elBatanDelTaytaRestAmazonas.jpg"
import amazonikaRestChachapoyas from "../../assest/imagenes/amazonikaRestChachapoyas.png"
import catarataGoctaChachapoyas from "../../assest/imagenes/catarataGoctaChachapoyas.jpg"
import fortalezaKuelapChachapoyas from "../../assest/imagenes/fortalezaKuelapChachapoyas.jpg"
import sarcofagosKarajiaAmazonas from "../../assest/imagenes/sarcofagosKarajiaAmazonas.jpg"


const VistaAmazonas=()=>{
    return(
        
<Grid container spacing={3}>
<Grid item md={12} xs={12}>
  <h2>Amazonas</h2>
</Grid>
<Grid item md={12} xs={12}>
  <h2>Hoteles</h2>
</Grid>
 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"        
        
          image={mamaqTamboLodgeAmazonas}
          alt="MamaqTamboLodge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mamaq Tambo Lodge
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Amazonas        
            <a href='https://www.mamaqtambolodge.com/'></a>
            
          </Typography>         
        </CardContent>         
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"        
        
          image={tamboSapalachanLodgeAmazonas}
          alt="TamboSapalachanAmazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tambo Sapalachan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amazonas
          </Typography>
         
        </CardContent>
         <a href='https://www.tambosapalanchan.com/'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"            
          image={ensenadaHotelChachapoyasAmazonas}
          alt="La EnsenadaHotelChachapoyasAmazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          La Ensenada Hotel Chachapoyas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chachapoyas
          </Typography>
         
        </CardContent>
         <a href='https://ensenadahotelycampo.com.pe'></a>
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
        
          image={elTejadoRestAmazonas}
          alt="El Tejado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Tejado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chachapoyas
          </Typography>
         
        </CardContent>
         <a href='https://carta.menu/restaurants/chachapoyas/el-tejado-sac'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"           
          image={elBatanDelTaytaRestAmazonas}
          alt="BatanDelTayta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          El Batán del Tayta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chachapoyas
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/ElBatanDelTayta'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia 
        className="img-selva"
          component="img"        
        
          image={amazonikaRestChachapoyas}
          alt="AmazonikaRestaurante"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Amazónika Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chachapoyas
          </Typography>
         
        </CardContent>
         <a href='https://www.facebook.com/amazonikarestaurante/'></a>
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
          image={catarataGoctaChachapoyas}
          alt="Catarata del Gocta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cataratas del Gocta
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chachapoyas Travel
          </Typography>
           <a href='https://www.chachapoyastravel.com'></a>
        </CardContent>       
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"          
          image={fortalezaKuelapChachapoyas}
          alt="fortalezaKuelapChachapoyas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">          
          Fortaleza de Kuelap y Teleféricos
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
        Aventuras pe tours
          </Typography>         
        </CardContent>
         <a href='https://www.aventuras.pe'></a>
 </Card>  
 </Grid>

 <Grid item md={4}>
<Card className='card-selva' >  
        <CardMedia
        className="img-selva"
          component="img"           
          image={sarcofagosKarajiaAmazonas}
          alt="SarcofagosKarajiaAmazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tour a los Sarcofagos de Karajia
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Turismo i.pe
          </Typography>
        </CardContent>
         <a href='https://www.turismoi.pe/'></a>
 </Card>  
 </Grid>

</Grid>
    )    
};
export default VistaAmazonas

