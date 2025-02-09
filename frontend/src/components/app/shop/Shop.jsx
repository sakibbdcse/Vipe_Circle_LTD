import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$50', image: 'https://via.placeholder.com/150' },
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
