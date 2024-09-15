
import './App.css'
import CardCard from './components/pages/CardCard';
import Category from './components/Category';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import ReviewCard from './components/ReviewCard';
function App() {

  return (
    <>
      <PageTitle title="Home" />   
      <Navbar />
      <Hero />
      <Category />
      <CardCard />
      <ReviewCard />
      <Footer />
    </>
  );
}

export default App
