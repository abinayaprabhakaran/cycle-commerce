
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        
        <Header />

        {/* Full width layout - no squished pages */}
        <Container 
          maxWidth="xl" 
          disableGutters 
          sx={{ mt: 4, mb: 4, px: 2 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Container>

        <Footer />

      </Router>
    </Provider>
  );
}

export default App;
