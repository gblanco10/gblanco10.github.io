import React from 'react';
import profile from '../static/main_photo.png'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Intro = (props) => {

    const {classes} = props
    return (
        <Grid container direction='row' style={{ height: 600 }}>
            <Grid item sm={2} justifyContent="left">
                <img src={profile} alt='profile' width='100%' object-fit='contain'/>
            </Grid>
            <Grid item sm={10}  direction='column' style={{padding:8}}>
                <Grid item style={{ marginTop: 16}}>
                    <Typography variant='h4' align='left' className={classes.headSection}>
                        AI Researcher
                    </Typography>
                </Grid>
                <Grid item style={{ marginTop: 8}}>
                    <Typography align='left' variant='body1'>
                        Artificial Intelligence researcher passionate about machine learning and programming.
                        Interested in how intelligent systems can be used for a more advanced process automation and also involved in the providing of situatiational awareness to improve decision making processes.
                        <br />
                        Strong background in computer science, with knowledge of the main programming languages and techniques to write efficient, clear and reusable code.   
                        Experience in the application of machine learning techniques in a broad set of scenarios  emergency scenarios ranging from the emergencies to identification processes and knowledge extraction.
                        <br />
                        Currently employed at LINKS Foundation where I am deepening my knowledge in computer vision and natural language processing techniques while 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Intro;