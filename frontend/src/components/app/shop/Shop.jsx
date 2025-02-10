import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' },
  { id: 2, name: 'Product 2', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Kos8eEjHDuMCDnm0oJln6u5t-5RPNemHsw&s' },
  { id: 3, name: 'Product 3', price: '$40', image: 'https://welpix.b-cdn.net/wp-content/uploads/2024/07/The-Importance-of-High-Value-Product-Photography.webp' },
  { id: 4, name: 'Product 4', price: '$50', image: 'https://welpix.b-cdn.net/wp-content/uploads/2024/07/The-Importance-of-High-Value-Product-Photography.webp' },
];

const Shop = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
