import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
);
const Title = () => <h2>Interesting Facts For Curious Minds</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };

  return <h4 style={inlineHeadingStyles}>Jordan Moore</h4>;

  // return (
  //   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
  //     Jordan Moore
  //   </h4>
  // );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
