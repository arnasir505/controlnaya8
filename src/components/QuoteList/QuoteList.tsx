import React, { useCallback, useEffect, useState } from 'react';
import { ApiQuotes, Quote } from '../../types';
import QuoteItem from '../QuoteItem/QuoteItem';
import { Link, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../Spinner/Spinner';

const QuoteList: React.FC = () => {
  const params = useParams();

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiQuotes | null>(
      params.id
        ? `/quotes.json?orderBy="category"&equalTo="${params.id}"`
        : '/quotes.json'
    );
    const quotes = response.data;
    if (quotes) {
      setQuotes(Object.keys(quotes).map((id) => ({ ...quotes[id], id: id })));
    } else {
      setQuotes([]);
    }
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  const updateQuotes = (id: string) => {
    setQuotes((prevState) => prevState.filter((quote) => quote.id !== id));
  };

  let quotesList = (
    <div className='mt-5'>
      <Spinner />
    </div>
  );

  if (quotes.length > 0 && !isLoading) {
    quotesList = (
      <>
        {quotes.map((quote) => (
          <QuoteItem
            id={quote.id}
            author={quote.author}
            text={quote.text}
            key={quote.id}
            updateQuotes={updateQuotes}
          />
        ))}
      </>
    );
  } else if (quotes.length === 0 && !isLoading) {
    quotesList = (
      <h2 className='text-center mt-5'>
        No quotes found. <Link to={'/add-quote'}>Click here</Link> to add one!
      </h2>
    );
  }
  return quotesList;
};

export default QuoteList;
