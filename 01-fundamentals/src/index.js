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

const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Title of the Book</h2>;
const Author = () => {
  return <h4>Author</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
