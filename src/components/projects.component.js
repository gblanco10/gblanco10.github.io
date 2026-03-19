import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import impactImage from '../assets/personal-projects/impact.png';
import turinHouseImage from '../assets/personal-projects/turin_house.png'

// removed unused import: openInNewTab

const Projects = (props) => {
    const {classes} = props
    return (
        <Grid container direction='column'>
            <Grid item>
                    <Typography variant='h4' align='left' className={classes.headSection}>
                        Projects
                    </Typography>
            </Grid>
            <Grid container direction={'column'} 
                style={{
                    // marginTop: 8,
                }}
            >
                <Grid item>
                    <ProjectItem
                        classes = {classes}
                        title='Impact Estimation'
                        img={impactImage}
                        url="https://github.com/gblanco10/impact-estimation"
                    >
                        <Grid container>
                            <Typography align='left' variant='body1' color={"white"}>
                                Official implementation of the paper Impact Estimation of Emergency Events Using Social Media Streams
                            </Typography>
                        </Grid>
                    </ProjectItem>
                </Grid>
                <Grid item>
                    <ProjectItem
                        classes = {classes}
                        title='Turin House'
                        img={turinHouseImage}
                        url="https://github.com/gblanco10/turin-house"
                    >
                        <Grid container>
                            <Typography align='left' variant='body1' color={"white"}>
                                Find the ideal neighborhood for your new home in Turin according to your preferences and public transportation options.
                            </Typography>
                        </Grid>
                    </ProjectItem>
                </Grid>
            </Grid>
        </Grid>
    )
}


const ProjectItem = (props) => {

    return (
        <Card
            raised={true}
            sx={{  bgcolor: (theme) => theme.palette.primary.light,
                    width: 1,}}
        >
            <CardHeader
                sx={{textAlign:'left'}}
                title={props.title}
                titleTypographyProps={{variant:'h5', className:props.classes.projectTitle}}
            />
            <Grid container direction='row'>
                <CardMedia
                    sx={{ width: 1/3, height: 100, marginLeft:1}}
                    image={props.img}
                    title="project-image"
                />
                <CardContent>
                    {props.children}
                </CardContent>
            </Grid>
                <CardActions>
                <Button
                    size="small"
                    component="a"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </Button>
            </CardActions>
    </Card>
    )
}

export default Projects;