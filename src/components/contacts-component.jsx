import React from 'react';
import profile from '../static/main_photo.png'
import Grid from '@mui/material/Grid';
import { Typography,IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }

const Contacts = (props) => {
    const { classes } = props
    return (
        <Grid container direction='column' style={{ padding: 8 }}>
            <Grid item style={{ marginTop: 16 }}>
                <Typography variant='h4' align='center' className={classes.headSection}>
                    Contacts
                </Typography>
            </Grid>
            <Grid container style={{ marginTop: 8 }} direction='row' justifyContent={'center'}>
                <Grid item>
                    <IconButton aria-label="delete" onClick={()=>openInNewTab("https://www.linkedin.com/in/giacomoblanco/")}>
                        <LinkedInIcon fontSize='large'/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete" onClick={()=>openInNewTab("https://twitter.com/giacomoblanco10")}>
                        <TwitterIcon fontSize='large'/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete">
                        <EmailIcon fontSize='large'/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contacts;