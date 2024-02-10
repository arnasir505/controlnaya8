import React, { useCallback, useEffect, useState } from 'react';
import editIcon from '../../assets/icons/pencil-square.svg';
import deleteIcon from '../../assets/icons/x.svg';
import { Link } from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {
  id: string;
  author: string;
  text: string;
  updateQuotes: (id: string) => void;
}

const QuoteItem: React.FC<Props> = ({ id, author, text, updateQuotes }) => {
  const [color, setColor] = useState('');

  const getRandomColor = useCallback((stringInput: string) => {
    let stringUniqueHash = [...stringInput].reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    setColor(`hsl(${stringUniqueHash % 360}, 95%, 35%)`);
  }, []);

  const deleteQuote = async (id: string) => {
    await axiosApi.delete(`/quotes/${id}.json`);
    updateQuotes(id);
  };

  useEffect(() => {
    getRandomColor(author);
  }, [getRandomColor]);

  return (
    <figure
      className='bg-white p-3 rounded position-relative'
      style={{ borderLeft: '.25rem solid', borderColor: color }}
    >
      <blockquote className='blockquote mb-1'>
        <p>{text}</p>
      </blockquote>
      <div className='d-flex align-items-center justify-content-between'>
        <figcaption className='blockquote-footer mb-0 mt-0 font-italic'>
          {author}
        </figcaption>
        <div className='d-flex'>
          <Link
            to={`/quotes/${id}/edit`}
            className='btn d-flex justify-content-center align-items-center ms-2'
          >
            <img src={editIcon} alt='edit' style={{ height: '20px' }} />
          </Link>
          <button
            className='btn d-flex justify-content-center align-items-center'
            onClick={() => deleteQuote(id)}
          >
            <img src={deleteIcon} alt='delete' style={{ height: '30px' }} />
          </button>
        </div>
      </div>
    </figure>
  );
};

export default QuoteItem;
