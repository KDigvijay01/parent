import React from 'react';
import {AppBar, Button ,Grid,Toolbar, InputBase, Icon, IconButton, Badge, Typography, ListItem} from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze';
import FeedIcon from '@mui/icons-material/Feed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TaskIcon from '@mui/icons-material/Task';
import CollectionsIcon from '@mui/icons-material/Collections';
import './Nav.css';



function Nav() {
    return (
                <Grid container className='container'>
                    <Grid container className="chotu-beta">
                        <Grid item lg={3} className="icon-name"> 
                            <img src="https://img-premium.flaticon.com/png/128/3257/premium/3257895.png?token=exp=1633272575~hmac=16e0b91cbf4c97e2736f813226e82885"></img>
                            <Typography className="sitename" >KALPA-TARU</Typography>
                        </Grid>
                        <Grid item lg={6} className="building" align='bottom'>
                                <Grid item className="building-name" lg={12} align="center">
                                    <Typography variant="h4">AMODA RESERVE SOUTH PARK</Typography>
                                </Grid>
                                <Grid item lg={12} align='center'>
                                <Typography variant="h5">LONAVALA</Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} className="menu">
                            <Button variant="contained">
                                ENQUIRE NOW
                            </Button>
                            <IconButton>
                                <DehazeIcon/>
                            </IconButton>
                        </Grid> 
                        
                    </Grid>
                    <Grid item lg={3}className="bottom-line">
                        <IconButton><FeedIcon/></IconButton>
                        <Typography>Status: Limited OC Received Villas</Typography>
                    </Grid>

                    <Grid item lg={2}className="bottom-line">
                        <Typography><IconButton><LocationOnIcon/></IconButton>Location: Lonavala, Lonavala</Typography>
                    </Grid>

                    <Grid item lg={2}className="bottom-line">
                        <Typography><IconButton><AttachMoneyIcon/></IconButton>Price: On Request</Typography>
                    </Grid>

                    <Grid item lg={2}className="bottom-line">
                    <Typography><IconButton><TaskIcon/></IconButton>Possession: Under Construction</Typography>
                    </Grid>

                    <Grid item lg={2}className="bottom-line">
                        <Typography><IconButton><CollectionsIcon/></IconButton>Typology: 3, 4, and 5 Bed Luxury Villas</Typography>
                    </Grid>
                    
                </Grid>
           
    )
}

export default Nav
