import React from 'react'
import Feed from '../../../components/app/social/Feed'
import RightBar from '../../../components/app/social/RightBar'
import { Grid } from '@mui/material';

const Home = () => {
    return (
        <Grid container spacing={2} sx={{ marginTop: '70px' }}>
            {/* Left Section */}
            <Grid item xs={3}>
                <div>left</div>
            </Grid>

            {/* Middle Section */}
            <Grid item xs={6}>
                <Feed />
            </Grid>

            {/* Right Section */}
            <Grid item xs={3}>
                <RightBar />
            </Grid>
        </Grid>
    )
}

export default Home