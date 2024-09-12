
import './App.css'
import CardCard from './components/pages/CardCard';
import Category from './components/Category';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import ReviewCard from './components/ReviewCard';
import DoctorProfile from './components/pages/DoctorProfile';

function App() {

  return (
    <>
      <PageTitle title="Home" />   
      <Navbar />
      <Hero />
      <Category />
      <CardCard />
      <ReviewCard />
      <DoctorProfile />
      <Footer />
    </>
  );
}

export default App
