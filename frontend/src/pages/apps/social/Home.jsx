import { Container } from '@mui/material'
import React from 'react'
import Feed from '../../../components/app/social/Feed'
import RightBar from '../../../components/app/social/RightBar'

const Home = () => {
    return (
        <Container sx={{ marginTop: '70px', textAlign: 'center' }}>
            <Feed />
            <RightBar />
        </Container>
    )
}

export default Home