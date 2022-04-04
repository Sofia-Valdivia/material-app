import React from  'react';
import { Container, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import "../Atractivos/index.css"

const Atractivos=()=>{
    return(
 <Container className="card-container">
<Grid container spacing={5}  >           
<Grid  item md={4} lg={4} sm={12} xs={4}>
<Card className='card-turismo' >  
        <CardMedia
        className="img-atractivos"
          component="img"        
        
          image="https://th.bing.com/th/id/OIP.P0qIH_GmqZFfDdNQk_O1pAHaDt?w=332&h=174&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="MancoraPeru"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Máncora-Piura
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Balneario de Ensueño
          </Typography>
        </CardContent>
 </Card>  
 </Grid>
 <Grid item md={4} lg={4} sm={12} xs={4}>  
 <Card className='card-turismo'>  
        <CardMedia
        className="img-atractivos"
          component="img"          
          image="https://th.bing.com/th/id/OIP.mbh5AwLA7aO5AyDCRcyOQQHaF7?w=215&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="NazcaLines"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Líneas de Nazca
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Geoglifos Misteriosos
          </Typography>
        </CardContent>
 </Card>     
</Grid>

<Grid item md={4} lg={4} sm={12} xs={4}>  
 <Card className='card-turismo'>  
        <CardMedia
        className="img-atractivos"
          component="img"             
          image="https://th.bing.com/th/id/OIP.WCaiZox9UCB09jtv-FSjZAHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="ColcaCanyon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cañón del Colca-Arequipa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Apreciando al cóndor en las alturas
          </Typography>
        </CardContent>
 </Card>  
</Grid>
<Grid item md={6} lg={4} sm={12}xs={6}>  
 <Card className='card-turismo'>  
        <CardMedia
          component="img"
          className="img-atractivos"
             
          image="https://th.bing.com/th/id/OIP.AGpvUkTKQVf6Y-gSVmu71AHaDY?w=347&h=160&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="Manu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parque Nacional del Manu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Un paraiso en la Tierra
          </Typography>
        </CardContent>
 </Card>  
</Grid>
<Grid item md={6} lg={4} sm={12}xs={6}>  
 <Card className='card-turismo'>  
        <CardMedia
          component="img"
          className="img-atractivos"
          
          image="https://th.bing.com/th/id/OIP.eB3oIuYMTx1eTGpiVTzUhQHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="Huascaran"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nevado del Huascarán-Huaraz
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Imponente y Majestuoso.
          </Typography>
        </CardContent>
 </Card>  
</Grid>


</Grid> 
        </Container>
    )
}
export default Atractivos