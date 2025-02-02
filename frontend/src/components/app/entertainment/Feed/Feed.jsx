import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container, IconButton, Rating } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';

const movies = [
  {
    title: 'Jawean',
    image: 'https://images.mid-day.com/images/images/2023/may/jaweanmainposter_d.jpg',
    description: 'This is a description of Movie 1.',
    rating: 4
  },
  {
    title: 'salaar',
    image: 'https://images.mid-day.com/images/images/2023/may/salaarmainposter_d.jpg',
    description: 'This is a description of Movie 2.',
    rating: 3
  },
  {
    title: 'Movie 3',
    image: 'https://static.toiimg.com/photo/106858408.cms',
    description: 'This is a description of Movie 3.',
    rating: 5
  },
  {
    title: 'Movie 4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllUr_v_6KaogpltGwXXe5UT_LUogeUvNA5A&s',
    description: 'This is a description of Movie 4.',
    rating: 2
  },
];

const Feed = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <div style={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="200"
                  image={movie.image}
                  title={movie.title}
                />
                <IconButton
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </div>
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.description}
                </Typography>
                <Rating
                  name="movie-rating"
                  value={movie.rating}
                  precision={0.5}
                  readOnly
                  icon={<StarIcon />}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed;