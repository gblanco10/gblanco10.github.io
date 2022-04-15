import './App.css';
import ResponsiveAppBar from './components/app-bar.component'

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Intro from './components/intro.component'

const useStyles = makeStyles((theme) => ({
  section: {
      padding: '16px 8px',
  },
  headSection:{
    color:theme.palette.primary.main
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Grid container direction='column'>
        <Grid item className={classes.section}>
          <Intro 
            classes={classes}
          />
        </Grid>
        <Grid item class={classes.section}>
          <div id='exp' style={{ background: 'green', height: 900 }}>
            Experience
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <div id='pub' style={{ background: 'yellow', height: 900 }}>
            Pubblications
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <div id='pro' style={{ background: 'blue', height: 900 }}>
            Projects
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <div id='con' style={{ background: 'green', height: 900 }}>
            Contacts
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
