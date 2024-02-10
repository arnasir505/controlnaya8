import React from 'react';

const QuoteItem: React.FC = () => {
  return (
    <figure
      className='bg-white p-3 rounded'
      style={{ borderLeft: '.25rem solid #a34e78' }}
    >
      <blockquote className='blockquote pb-2'>
        <p>
          Age is an issue of mind over matter. If you don't mind, it doesn't
          matter.
        </p>
      </blockquote>
      <figcaption className='blockquote-footer mb-0 font-italic'>
        Mark Twain
      </figcaption>
    </figure>
  );
};

export default QuoteItem;
