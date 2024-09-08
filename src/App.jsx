
import './App.css'
import Card from './components/Card';
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
      <Card />
      <Footer />
    </>
  );
}

export default App
