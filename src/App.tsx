import './App.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/system';
import SupBar from './components/SupBar';
import InfBar from './components/InfBar';
import Cart from './components/Cart';
import Also from './components/Also';
import Footer from './components/Footer';
import { CustomTheme } from './components/CustomTheme';

function App() {
  
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={CustomTheme}>
          <SupBar/>
          <InfBar/>
          <Cart/>
          <Also/>
          <Footer/>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
