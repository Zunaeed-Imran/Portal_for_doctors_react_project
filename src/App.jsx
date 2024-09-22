
import './App.css'
import CardCard from './components/pages/CardCard';
import Category from './components/Category';
import Hero from './components/Hero';
import PageTitle from './components/PageTitle';
import ReviewCard from './components/ReviewCard';
import MessageReviewMessage from './components/pages/MessageReviewMessage';
function App() {

  return (
    <>
      <PageTitle title="Home" />   
      <Hero />
      <Category />
      <CardCard />
      <ReviewCard />
      <MessageReviewMessage/>
    </>
  );
}

export default App
