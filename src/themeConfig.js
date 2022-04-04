import {createTheme} from "@mui/material/styles"
import { grey} from '@mui/material/colors';
import { deepOrange} from '@mui/material/colors';


const theme=createTheme({
    palette:{
        primary:{
            main:grey[600]
        },
        secondary:{
            main:deepOrange[800]
        }
    }

})
export default theme;