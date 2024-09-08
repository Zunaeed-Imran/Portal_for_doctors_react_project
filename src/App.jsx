
import './App.css'
import Category from './components/Category';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';

function App() {

  return (
    <>
      <PageTitle title="Home" />   
      <Navbar />
      <Hero />
      <Category />
      <Footer />
    </>
  );
}

export default App
