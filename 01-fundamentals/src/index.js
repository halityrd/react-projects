import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interest Facts For Curios Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-2.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log('handle form input');
  };

  const handleButonClick = () => {
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
