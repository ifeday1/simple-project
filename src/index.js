import React from 'react';
import ReactDom from 'react-dom'

//CSS
import './index.css';

function BookList(){
  return (
  <section className= "book">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  );

};


const Book = () => {
  const title = 'God is Good';
  const author = 'ifeoluua oladeni';
return(
  <article className="books">
    <img src="https://m.media-amazon.com/images/I/71hvJ2eS6kL._AC_UY218_.jpg" alt="" />
    <h1>{title}</h1>
    <h4> {author} </h4>
    </article>
);
}
// const Greeting = () => {
// return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
// }
ReactDom.render(<BookList/>, document.getElementById("root"));