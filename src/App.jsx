//main component logic
import {useState} from 'react'; //useState is react hook, to create state insde component
import quotes from './quotes'; //an array of quotes
import './App.css';

function App() {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); //picks a random quote from the array
    return quotes[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="app">
      <div className="quote-box">
        <h2>"{quote.text}"</h2>
        <p>{quote.author}</p>
        <button onClick = {handleNewQuote}>New Quote</button>

      </div>

    </div>
  )
}

export default App;