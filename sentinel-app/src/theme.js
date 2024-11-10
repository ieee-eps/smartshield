import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#008cff',
        },
        secondary: {
            main: '#5919ff',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: 8,
    }
});

export default theme;
