import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Link from '@mui/material/Link';

const Publications = (props) => {

    const { classes } = props
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant='h4' align='left' className={classes.headSection}>
                    Publications
                </Typography>
            </Grid>
            <Grid item style={{ marginTop: 8, marginLeft: 16 }}>
                <Accordion sx={{ mb: 1, width: '100%' }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                            2025
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '100%' }}>
                        <ul>
                            <li>
                                <Typography align='left' variant='body1'>
                                    L. Barco, G. Blanco, G. Chiriaco, A. Intini et al. <Link href="https://openaccess.thecvf.com/content/CVPR2025W/USM3D/html/Barco_Turin3D_Evaluating_Adaptation_Strategies_under_Label_Scarcity_in_Urban_LiDAR_CVPRW_2025_paper.html">Turin3D: Evaluating Adaptation Strategies under Label Scarcity in Urban LiDAR Segmentation with Semi-Supervised Techniques</Link>, 2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2025, pp. 2052-2060.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ mb: 1, width: '100%' }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                            2024
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '100%' }}>
                        <ul>
                            <li>
                                <Typography align='left' variant='body1'>
                                    G. Blanco, L. Barco, L. Innocenti and C. Rossi, <Link href="https://ieeexplore.ieee.org/abstract/document/10615605">Urban Air Pollution Forecasting: a Machine Learning Approach leveraging Satellite Observations and Meteorological Forecasts</Link>, 2024 IEEE International Workshop on Metrology for Living Environment (MetroLivEnv), Chania, Greece, 2024, pp. 421-426.
                                </Typography>
                            </li>
                            <li>
                                <Typography align='left' variant='body1'>
                                    L. Innocenti, G. Blanco, L. Barco and C. Rossi, <Link href="https://ieeexplore.ieee.org/abstract/document/10615374">Maximum Temperature Prediction Using Remote Sensing Data Via Convolutional Neural Network</Link>, 2024 IEEE International Workshop on Metrology for Living Environment (MetroLivEnv), Chania, Greece, 2024, pp. 427-431.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ mb: 1, width: '100%' }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                            2023
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '100%' }}>
                        <ul>
                            <li>
                                <Typography align='left' variant='body1'>
                                    E. Arnaudo, G. Blanco et al., <Link href="https://ieeexplore.ieee.org/abstract/document/10122915">A Comparative Evaluation of Deep Learning Techniques for Photovoltaic Panel Detection From Aerial Images</Link>, in IEEE Access, vol. 11, pp. 47579-47594, 2023.
                                </Typography>
                            </li>
                            <li>
                                <Typography align='left' variant='body1'>
                                    G. Blanco, F. Oldani, D. Salza, B. Basile and C. Rossi, <Link href="https://ieeexplore.ieee.org/abstract/document/10424215">Satellite-based Grapevine Phenological Stage Detection through a Deep Supervised Machine Learning Approach</Link>, 2023 IEEE International Workshop on Metrology for Agriculture and Forestry (MetroAgriFor), Pisa, Italy, 2023, pp. 60-65.
                                </Typography>
                            </li>
                            <li>
                                <Typography align='left' variant='body1'>
                                    G. Blanco, F. Oldani, D. Salza and C. Rossi, <Link href="https://ieeexplore.ieee.org/abstract/document/10424071">On the automatic detection and monitoring of Leaves and Grapes using in-field optical cameras</Link>, 2023 IEEE International Workshop on Metrology for Agriculture and Forestry (MetroAgriFor), Pisa, Italy, 2023, pp. 704-709.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ mb: 1, width: '100%' }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
                            2022
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '100%' }}>
                        <ul>
                            <li>
                                <Typography align='left' variant='body1'>
                                    G. Blanco, E. Arnaudo, D. Salza and C. Rossi, <Link href="https://ieeexplore.ieee.org/abstract/document/9905213">Impact Estimation of Emergency Events Using Social Media Streams</Link>, 2022 IEEE 7th Forum on Research and Technologies for Society and Industry Innovation (RTSI), Paris, France, 2022, pp. 102-108.
                                </Typography>
                            </li>
                            <li>
                                <Typography align='left' variant='body1'>
                                    F. Garcea, G. Blanco, A. Croci et al. <Link href="https://www.nature.com/articles/s41598-022-26180-4">Self-supervised and semi-supervised learning for road condition estimation from distributed road-side cameras</Link>. Sci Rep 12, 22341 (2022).
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default Publications;