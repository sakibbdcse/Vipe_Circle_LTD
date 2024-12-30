import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // Corrected typo here

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
