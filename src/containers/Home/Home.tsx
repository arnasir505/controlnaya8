import QuoteItem from '../../components/QuoteItem/QuoteItem';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { ApiQuotes, Quote } from '../../types';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    const response = await axiosApi.get<ApiQuotes | null>('/quotes.json');
    const quotes = response.data;
    if (quotes) {
      setQuotes(
        Object.keys(quotes).map((id) => ({
          ...quotes[id],
          id: id,
        }))
      );
    }
  }, []);

  const updateQuotes = (id: string) => {
    setQuotes((prevState) => prevState.filter((quote) => quote.id !== id));
  };

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  let quotesList = (
    <div className='mt-5'>
      <Spinner />
    </div>
  );

  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-4'>
          <Sidebar />
        </div>
        <div className='col-md-8'>
          {quotes.map((quote) => (
            <QuoteItem
              id={quote.id}
              author={quote.author}
              text={quote.text}
              key={quote.id}
              updateQuotes={updateQuotes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
