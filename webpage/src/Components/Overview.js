import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import './Overview.css'

function Overview() {
    return (
        <Grid container style={{width: '100vw', height: '100%', border:'2px solid orange'}}>
            <Grid item lg={5} className="overview"> 
                <Typography>01 OVERVIEW</Typography>
                <img src='https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f9bc414485dd.jpg'></img>
            </Grid>
            <Grid item lg={7}>
                <Typography variant='h1'>OVERVIEW</Typography> 
                <Grid item lg={12}>
                    <Typography variant='h3'>Amoda Reserve South Park</Typography>
                </Grid>
                <Grid item lg={12}>
                    <Typography>Nuzzled in the hills of Kunenama, Lonavala, is a place that the discerning few call home, South Park at Amoda Reserve. Here, the homes come with a host of luxuries. Themed gardens like fruit parks, rock gardens, salad & herb gardens; water bodies, camping grounds, pet parks and much more. These amenities beautifully complement the villas and the carefully planned landscapes surrounding it, making Amoda Reserve-South Park one of Lonavala’s most luxurious villa developments. Experience the beauty of the lush green landscapes. Jog through the themed gardens and find your home for the mind amongst the exquisitely crafted 3, 4, and 5 bedroom villas. To add to that, the residents get priority membership to the grand club of over 6 acres.</Typography>
                </Grid>

            </Grid>
            <Grid item lg={12}>
                <img></img>
            </Grid>

        </Grid>
    )
}

export default Overview
