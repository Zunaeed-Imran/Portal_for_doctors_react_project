
import './App.css'
import Footer from './components/Footer';

import Home from './components/Home';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';

function App() {

  return (
    <>
      <PageTitle title="Home" />   
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App
