
import React from  'react';

import NavBar from "./layouts/Header/Header";
import Button from "@mui/material/Button";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import Atractivos from './pages/Atractivos';
import Form from './pages/Form/form';
import CarruselSierra from './components/CarouselSierra';
import CarruselSelva from './components/CarouselSelva';
import CarruselCosta from './components/CarouselCosta';
import VistaLima from './pages/VistaLima';
import VistaIca from './pages/VistaIca';

function App(){
    return(
<ThemeProvider theme={theme}> 
<NavBar/>
<Button  variant="contained" color="primary">boton1</Button>

<Button variant="contained" color="secondary">Boton2</Button>
<Atractivos/>
<Form />   
        
        
    
<CarruselCosta/>
<CarruselSierra/>
<CarruselSelva/>
<VistaLima/>
<VistaIca/>
 </ThemeProvider>
        
    );
};
export default App;