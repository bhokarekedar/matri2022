import './App.css';
import Main from './Main';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c53030",
      },
      secondary: {
        main: "#b83280",
      },
    }
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <Main />
    </ThemeProvider>
      
    </>
  );
}

export default App;
