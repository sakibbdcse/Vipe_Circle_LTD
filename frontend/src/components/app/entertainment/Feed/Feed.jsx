import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const movies = [
  {
    title: 'Movie 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of Movie 1.'
  },
  {
    title: 'Movie 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of Movie 2.'
  },
  {
    title: 'Movie 3',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of Movie 3.'
  },
  {
    title: 'Movie 4',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of Movie 4.'
  },
];

const Feed = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={movie.title}
                height="200"
                image={movie.image}
                title={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed;
