import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    background:{
      default:'#F5F5F7',
      paper:'#ffffff',
      footer:'#63abd3',
    },
    primary: {
      main:'#303F9F',
      light: '#7986CB',
      dark: '#1A237E',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#df40fb',
      light: '#f2b7fc',
      dark: '#b300e9',
      contrastText: '#ffffff'
    },
    text:{
      primary:'##212121',
      secondary:'#757575',
      contrast:'#ffffff'
    }
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

