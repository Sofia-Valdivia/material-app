import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


// nombre
// apellido
// telefono
// correo
// genero
// ciudad o region donde vives
//actividades de interes :
//aventura, descanso, vivencial,cultural,negocios,naturaleza.


const Form= () => {
  const [values,setValues] = useState({
name:"",
last_name:"",
cel_number:"",
email:"",
gender:"",
date_born:"",
city:"",

  });

  const handleChangeInput=(e)=>{
      const {value,name}=e.target;

  setValues({
      ...values,
      [name]:value,
  });  

  };

  return (
    <Container maxWidth="lg">
      <form >
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <h2>Ingresa tus Datos:</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="name"
              fullWidth
              error={false}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellido"
              name="last_name"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
       
          <Grid item md={6} xs={12}>
            <TextField
              label="Teléfono"
              name="cel-number"
              type="number"
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              fullWidth
              onChange={handleChangeInput}
            />
           </Grid>
         <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="genero">Género</InputLabel>
              <Select
                labelId="genero"
                label="Genero"
                onChange={handleChangeInput}
                name="gender"
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>         


          <Grid item md={6} xs={12}>
            <TextField
              label="Ciudad"
              name="city"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <h2>Actividades de Interés:</h2>
          </Grid>
        
          <Grid item md={6} xs={12}>
              
            <FormGroup>

                <FormControlLabel
                control={
                  <Checkbox
                    value="adventure"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Aventura"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    value="bussiness"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Negocios"
              />
               <FormControlLabel
                control={
                  <Checkbox
                    value="culture"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Culturales"
              />

            </FormGroup>
          </Grid>


          <Grid item md={6} xs={12}>
            <FormGroup>             
             
              <FormControlLabel
                control={
                  <Checkbox
                    value="vivencial"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Vivencial"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="nature"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Naturaleza"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    value="rest"
                    onChange={handleChangeInput}
                    name="activities"
                  />
                }
                label="Descanso"
              />

            </FormGroup>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button type="submit" variant="contained" fullWidth size="large">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
