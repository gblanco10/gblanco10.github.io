import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    background:{
      default:'#f0f7fa'
    },
    primary: {
      main: '#335384ff',
      light: '#637fb4',
      dark: '#002b57',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#bf211e',
      light: '#f95947',
      dark: '#870000',
      contrastText: '#ffffff'
    },
  },
  typography:{
    fontFamily:'Roboto',
    body1: {
      fontSize: [24, "!important"]
  }
  }
});
export default appTheme;

/* CSS HEX */
// --y-in-mn-blue: #335384ff;
// --white: #fffffeff;
// --columbia-blue: #b1d5e9ff;
// --english-lavender: #b4869fff;
// --venetian-red: #bf211eff;
// --iceberg: #63abd3ff;

