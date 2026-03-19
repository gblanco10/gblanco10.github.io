import React from 'react';
import profile from '../static/main_photo.png'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Link from '@mui/material/Link';


const Intro = (props) => {

    const {classes} = props
    return (
        <Grid container direction='row'>
            <Grid item sm={2} justifyContent="left">
                <img src={profile} alt='profile' width='100%' object-fit='contain'/>
            </Grid>
            <Grid item sm={10}  direction='column' style={{padding:8}}>
                <Grid item>
                    <Typography variant='h4' align='left' className={classes.headSection}>
                        AI Researcher
                    </Typography>
                </Grid>
                <Grid item style={{ marginTop: 8}}>
                    <Typography align='left' variant='body1'>                        
                        I'm a Computer Science Master graduate and AI Applied Researcher currently working at <Link href="https://linksfoundation.com/">LINKS Foundation</Link>. With a strong engineering background and a passion for problem-solving, I specialize in designing, developing, and deploying machine learning systems for both research and industrial applications.

                        My research interests focus on intelligent systems that enhance process automation and situational awareness. I aim to create solutions that can handle complex, dynamic processes requiring adaptation. Technically, I have deep expertise in deep learning, computer vision, and remote sensing, applied to diverse domains such as environmental monitoring, smart agriculture, energy, and cultural heritage.

                        I am always eager to learn new skills and embrace new challenges in the evolving AI domain.

                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Intro;