import './App.css'

import CardCard from './components/pages/CardCard';
import Category from './components/Category';
import Hero from './components/Hero';
import MessageReviewMessage from './components/pages/MessageReviewMessage';
import PageTitle from './components/PageTitle';
import ReviewCard from './components/ReviewCard';
import Footer from './components/layout/Footer';

function App() {

  return (
    <>
      <div>
        <PageTitle title="AnestheSure" />

        <Hero />

        <Category />

        <CardCard />

        <ReviewCard />

        <MessageReviewMessage />
        
        <Footer />
      </div>
    </>
  );
}

export default App
