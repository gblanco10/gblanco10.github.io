import './App.css';
import ResponsiveAppBar from './components/app-bar.component'

import { Grid } from '@mui/material';
import { Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Intro from './components/intro.component'
import Experience from './components/experience.component';
import Publications from './components/pub.component'
import Contacts from './components/contacts-component';
import Projects from './components/projects.component';

const useStyles = makeStyles((theme) => ({
  section: {
      padding: '16px 8px',
  },
  headSection:{
    color:theme.palette.primary.main
  },
  projectTitle:{
    color:theme.palette.primary.contrastText
  },
  footer:{
    background:theme.palette.primary.dark,
    padding: '16px 8px',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Grid container direction='column' >
        <Grid item className={classes.section}>
          <Intro 
            classes={classes}
          />
        </Grid>
        <Grid item class={classes.section}>
          <div id='experience'>
            <Experience
              classes={classes}
            />
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <div id='publications'>
           <Publications
              classes={classes}
            />
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <div id='projects'>
          <Projects
              classes={classes}
            />
          </div>
        </Grid>
        <Grid item className={classes.section}>
          <Grid id='contacts' item className={classes.section}>
          <Contacts 
            classes={classes}
          />
        </Grid>
        </Grid>
      </Grid>
      <Container maxWidth={false} className={classes.footer}>
        <Grid container alignItems="center">
          <Typography variant="body2" align="center" color="white">
            © 2026 Giacomo Blanco
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
