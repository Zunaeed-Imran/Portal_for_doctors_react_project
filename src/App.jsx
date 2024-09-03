
import { Helmet } from 'react-helmet';
import './App.css'
import Footer from './components/Footer';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App
