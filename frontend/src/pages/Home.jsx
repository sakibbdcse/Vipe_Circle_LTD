import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    const categories = [
        { title: 'Social', image: 'https://www.trainingjournal.com/wp-content/uploads/2023/08/AdobeStock_570773304WEB-1536x864.jpg', description: 'Connect and share moments with friends and family.' },
        { title: 'Entertainment', image: 'https://lizzydominic248.wordpress.com/wp-content/uploads/2014/03/entertainment-1.jpg', description: 'Explore movies, music, and games for fun.' },
        { title: 'Shop', image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/17/c7/3f/item-shop.jpg', description: 'Find amazing deals and shop your favorite items.' },
        { title: 'AI', image: 'https://www.timescale.com/_next/image?url=https%3A%2F%2Ftimescale.ghost.io%2Fblog%2Fcontent%2Fimages%2F2024%2F07%2FA-Brief-History-of-AI_cover.jpg&w=1080&q=75', description: 'Discover the latest in artificial intelligence technology.' },
        { title: 'Jobs', image: 'https://jcf.org.bd/jcfwebport/wp-content/uploads/2019/01/jobs.jpg', description: 'Search for your dream job and career opportunities.' },
        { title: 'Class', image: 'https://dcblog.b-cdn.net/wp-content/uploads/2023/11/Leonardo_Phoenix_A_cinematic_photograph_featuring_a_modern_wel_1-1024x579.jpg', description: 'Join classes and learn new skills online.' },
        { title: 'Games', image: 'https://hips.hearstapps.com/hmg-prod/images/most-popular-video-games-of-2022-1642612227.png?crop=0.502xw:1.00xh;0.250xw,0&resize=980:*', description: 'Dive into the world of exciting and fun games.' },
    ];

    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={category.image}
                                    alt={category.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {category.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Explore
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
