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
    <Book />
    <Book />
    <Book />
  </section>
  );

};

const Book = () => {
return(
  <article className="books">
    <Image></Image>
    <Title></Title>
    <Author></Author>
    </article>
);
}
const Image = () => (
  <img src="https://m.media-amazon.com/images/I/71hvJ2eS6kL._AC_UY218_.jpg" alt=""/>
)
const Title = () => <h1>God is Good</h1>
const Author =() => <h4>ifeoluwa oladeni</h4>
// const Greeting = () => {
// return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
// }
ReactDom.render(<BookList/>, document.getElementById("root"));