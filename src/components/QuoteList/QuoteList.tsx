import React, { useCallback, useEffect, useState } from 'react';
import { ApiQuotes, Quote } from '../../types';
import QuoteItem from '../QuoteItem/QuoteItem';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const QuoteList: React.FC = () => {
  const params = useParams();

  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    const response = await axiosApi.get<ApiQuotes | null>(
      params.id
        ? `/quotes.json?orderBy="category"&equalTo="${params.id}"`
        : '/quotes.json'
    );
    const quotes = response.data;
    if (quotes) {
      setQuotes(Object.keys(quotes).map((id) => ({ ...quotes[id], id: id })));
    }
  }, [params.id]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  const updateQuotes = (id: string) => {
    setQuotes((prevState) => prevState.filter((quote) => quote.id !== id));
  };
  return (
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
};

export default QuoteList;
