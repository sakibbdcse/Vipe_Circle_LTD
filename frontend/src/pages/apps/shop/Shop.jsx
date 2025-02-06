import { Grid } from '@mui/material'
import React from 'react'

const Shop = () => {
  return (
    <>
    <Grid container spacing={2} sx={{ marginTop: '70px' }}>
            {/* Left Section */}
            <Grid item xs={3}>
                <div>left</div>
            </Grid>

            {/* Middle Section */}
            <Grid item xs={6}>
                <div>middle</div>
            </Grid>

            {/* Right Section */}
            <Grid item xs={3}>
                <div>right</div>
            </Grid>
        </Grid>
    </>
  )
}

export default Shop
