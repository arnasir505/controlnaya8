import React from 'react';
import { Quote } from '../../types';
import QuoteItem from '../QuoteItem/QuoteItem';
import { useParams } from 'react-router-dom';

interface Props {
  quotes: Quote[];
  updateQuotes: (id: string) => void;
}

const QuoteList: React.FC<Props> = ({ quotes, updateQuotes }) => {
  const params = useParams();
  console.log(params.id);
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
