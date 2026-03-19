import Grid from '@mui/material/Grid';
import { Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScienceIcon from '@mui/icons-material/Science';
import Icon from '@mui/material/Icon';


export const openInNewTab = (url) => {
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
                    <IconButton aria-label="LinkedIn" onClick={() => openInNewTab("https://www.linkedin.com/in/giacomoblanco/")}>
                        <LinkedInIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="GitHub" onClick={() => openInNewTab("https://github.com/gblanco10")}>
                        <GitHubIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="ORCID" onClick={() => openInNewTab("https://orcid.org/0000-0001-6500-8511")}>
                        <ScienceIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="Email" onClick={() => openInNewTab("mailto: giacomoblanco10@gmail.com")}>
                        <EmailIcon fontSize='large' />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Contacts;