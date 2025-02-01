import React from 'react'
import { Grid } from '@mui/material';
import RightBar from '../../../components/app/entertainment/RightBar';
import Feed from '../../../components/app/entertainment/Feed/Feed';
const Home = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '70px', marginLeft:'70px' }}>
        <Grid item xs={3}>
                <div>left</div>
            </Grid>
            {/* Middle Section */}
            <Grid item xs={6}>
                <Feed/>
            </Grid>

            {/* Right Section */}
            <Grid item xs={3}>
                <RightBar />
            </Grid>
    </Grid>
  )
}

export default Home