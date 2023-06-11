import { capitalize } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'

export default createTheme({
palette:{
    primary:{
        main:'#3772ff',
        contrastText:'#fff',

    },
    secondary:{
        main:'#001f54'
    }
},
typography:{
    fontFamily: 'Poppins, sans-serif',
    button:{
       textTransform :'capitalize',
       fontWeight:600,
    },
    h4:{
        fontWeight:600,
    }
}
});