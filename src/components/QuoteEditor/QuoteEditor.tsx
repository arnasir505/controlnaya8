const QuoteEditor = () => {
  return (
    <div className='container'>
      <div className='col-6'>
        <h2 className='my-3'>Submit new quote</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='category' className='form-label'>
              Category
            </label>
            <select name='category' id='category' className='form-select'>
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
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteEditor;
