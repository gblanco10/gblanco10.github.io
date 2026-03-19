import Grid from '@mui/material/Grid';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from '@mui/material';
import { ImageList } from '@mui/material';
import {
    Card,
    CardActionArea,
    CardMedia,
    Link
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import up2030Image from '../assets/work-projects/up2030.jpeg';
import guardiansImage from '../assets/work-projects/guardians.jpg';
import fasterImage from '../assets/work-projects/faster.jpg';
import reevaluateImage from '../assets/work-projects/reevaluate.png';
import safersImage from '../assets/work-projects/safers.png';
import vitigeossImage from '../assets/work-projects/vitigeoss.png';
import nodesImage from '../assets/work-projects/nodes.png';
import spaceitupImage from '../assets/work-projects/spaceitup.png';
import inventaImage from '../assets/work-projects/inventa.jpg';

const projects = [
    {
        title: "SAFERS",
        image: safersImage,
        url: "https://safers-project.eu/"
    },
    {
        title: "FASTER",
        image: fasterImage,
        url: "https://www.faster-project.eu/"
    },
    {
        title: "UP2030",
        image: up2030Image,
        url: "https://up2030-he.eu/"
    },
    {
        title: "GUARDIANS",
        image: guardiansImage,
        url: "https://guardians-project.eu/"
    },
    {
        title: "REEVALUATE",
        image: reevaluateImage,
        url: "https://reevaluate.eu/"
    },
    {
        title: "VITIGEOSS",
        image: vitigeossImage,
        url: "https://vitigeoss.eu/"
    },
    {
        title: "NODES",
        image: nodesImage,
        url: "https://ecs-nodes.eu/en/project"
    },
    {
        title: "SPACE IT UP",
        image: spaceitupImage,
        url: "https://spaceitup.it/"
    },
    {
        title: "INVENTA",
        image: inventaImage,
        url: "https://business.esa.int/projects/inventa"
    },

];

const Experience = (props) => {
    const { classes } = props
    return (
        <Grid item direction='column'>
            <Grid item>
                <Typography variant='h4' align='left' className={classes.headSection}>
                    Experience
                </Typography>
            </Grid>
            <Grid item>
                <Accordion sx={{ mb: 1, width: '100%', bgcolor: 'background.paper' }} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Box sx={{
                            display: 'flex', justifyContent: 'space-between', width: '100%', pr: 2
                        }}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                AI Applied Researcher @ LINKS Foundation
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                                Jan 2021 - Present
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '100%' }}>
                        <Typography variant='body1' align='left'>
                            <ul>
                                <li>
                                    Designed, developed and validated machine learning systems within European-funded research projects, reaching TRL 7–8 through deployment in pilot environments
                                </li>
                                <li>
                                    Conducted applied research using deep learning and computer vision across multiple real-world domains, including :
                                    <ul>
                                        <li>
                                            biometric security, such as presentation attack detection for remote identification systems
                                        </li>
                                        <li>
                                            urban analytics, including semantic segmentation of 3D point clouds acquired in urban environments
                                        </li>
                                        <li>
                                            environmental monitoring, such as urban air quality forecasting using satellite, meteorological and topological data
                                        </li>
                                        <li>
                                            precision agriculture, including crop disease risk estimation from time series data and phenological stage estimation from satellite imagery
                                        </li>
                                        <li>
                                            energy analytics, including photovoltaic panel detection from aerial and rooftop imagery for solar potential assessment
                                        </li>
                                        <li>
                                            cultural heritage and art analysis, including image-based recognition and similarity search of artworks
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Worked with heterogeneous data sources, including satellite data (Sentinel-2, Sentinel-3, Sentinel-5P), aerial imagery, natural images and time series data
                                </li>
                                <li>
                                    Developed deep learning models primarily using PyTorch, and contributed to peer-reviewed scientific publications
                                </li>
                                <li>
                                    Built and managed data pipelines involving SQL and NoSQL databases, including MongoDB, graph and vector databases
                                </li>
                                <li>
                                    Acted as industrial supervisor for master thesis students and as mentor for new hires, supporting onboarding and technical growth
                                </li>
                            </ul>
                        </Typography>
                        <Box sx={{ my: 4, width: '100%' }}>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                                Project Gallery
                            </Typography>
                            <ImageList sx={{ width: '100%' }} cols={4} rowHeight={180}>
                                {projects.map((item, index) => (
                                    <Card
                                        key={index}
                                        sx={{
                                            minWidth: 260,
                                            maxWidth: 260,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <CardActionArea
                                            component={Link}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="160"
                                                image={item.image}
                                                alt={item.title}
                                                sx={{ objectFit: 'contain' }}
                                            />
                                            <Box sx={{ p: 1.5, textAlign: 'center' }}>
                                                <Typography variant="subtitle2" noWrap>
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </ImageList>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default Experience;