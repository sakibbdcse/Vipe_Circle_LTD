import { Container } from '@mui/material'
import React from 'react'
import Feed from '../../../components/app/social/Feed'

const Home = () => {
    return (
        <Container sx={{ marginTop: '70px', textAlign: 'center' }}>
            <Feed />
        </Container>
    )
}

export default Home