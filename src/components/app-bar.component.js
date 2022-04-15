import React, {useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';

import AnchorLink from "react-anchor-link-smooth-scroll";


const useStyles = makeStyles((theme) => ({
    startICon: {
        margin: '0px',
        padding:'0px'
    }
}));

const ResponsiveAppBar = () => {

    const classes = useStyles();
    const toolbarRef = useRef()

    const getOffset = () => {
        return toolbarRef.current.clientHeight + 16
    }

    return (
        <AppBar position="sticky" ref={toolbarRef}>
            <Toolbar>
                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant='h5'>
                        Giacomo Blanco
                    </Typography>
                </Box>
                <AnchorLink href='#exp' offset={getOffset}>
                    <Button
                        key={'Exp'}
                        classes={{ startIcon: classes.startICon }}
                        sx={{ my: 2, color: 'white', display: 'flex',margin:0 }}
                        startIcon={<WorkIcon fontSize="40" sx={{marginRight:'8px'}}/>}
                        >
                        Experience
                    </Button>
                        </AnchorLink>
                <AnchorLink href='#pub' offset={getOffset}>
                    <Button
                        key={'Pub'}
                        classes={{ startIcon: classes.startICon }}
                        sx={{ my: 2, color: 'white', display: 'flex',margin:0}}
                        startIcon={<ScienceIcon fontSize="large" sx={{marginRight:'8px'}}/>}
                    >
                        Pubblications
                    </Button>
                    </AnchorLink>
                    <AnchorLink href='#pro' offset={getOffset}>
                    <Button
                        key={'Proj'}
                        classes={{ startIcon: classes.startICon }}
                        sx={{ my: 2, color: 'white', display: 'flex',margin:0}}
                        startIcon={<GitHubIcon fontSize="large" sx={{marginRight:'8px'}}/>}
                    >
                        Projects
                    </Button>
                    </AnchorLink>
                    <AnchorLink href='#con' offset={getOffset}>
                    <Button
                        key={'Cont'}
                        classes={{ startIcon: classes.startICon }}
                        sx={{ my: 2, color: 'white', display: 'flex' ,margin:0}}
                        startIcon={<CallIcon fontSize="large" sx={{marginRight:'8px'}}/>}
                    >
                        Contacts
                    </Button>
                    </AnchorLink>
            </Toolbar>
        </AppBar>
    );
};
export default ResponsiveAppBar;
