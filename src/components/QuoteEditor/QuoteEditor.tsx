import { useState } from 'react';
import { Quote } from '../../types';
import axiosApi from '../../axiosApi';

const QuoteEditor = () => {
  const [quote, setQuote] = useState<Quote>({
    author: '',
    category: '',
    text: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setQuote((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    await axiosApi.post('/quotes.json', quote);
    setQuote({ author: '', category: '', text: '' });
    setIsDisabled(false);
  };

  return (
    <div className='container'>
      <div className='col-6'>
        <h2 className='my-3'>Submit new quote</h2>
        <form onSubmit={(e) => addQuote(e)}>
          <div className='mb-3'>
            <label htmlFor='category' className='form-label'>
              Category
            </label>
            <select
              name='category'
              id='category'
              className='form-select'
              value={quote.category}
              onChange={(e) => handleChange(e)}
              required
            >
              <option selected disabled value={''}>
                Choose...
              </option>
              <option value='star-wars'>Star Wars</option>
              <option value='famous-people'>Famous People</option>
              <option value='humor'>Humor</option>
              <option value='motivational'>Motivational</option>
              <option value='game-of-thrones'>Game of Thrones</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='author' className='form-label'>
              Author
            </label>
            <input
              type='text'
              name='author'
              id='author'
              className='form-control'
              value={quote.author}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='text' className='form-label'>
              Quote Text
            </label>
            <textarea
              name='text'
              id='text'
              className='form-control'
              rows={3}
              value={quote.text}
              onChange={(e) => handleChange(e)}
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className={`btn btn-primary ${isDisabled ? 'disabled' : ''}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteEditor;
