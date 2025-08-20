import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interest Facts For Curios Minds',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-2.jpg',
};

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

console.log(newNames);

const BookList = () => {
  // return <section className="booklist">{newNames}</section>;
  return (
    <section className="booklist">
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
