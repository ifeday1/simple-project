import React from 'react';
import ReactDom from 'react-dom'

//CSS
import './index.css';
//setup vars
const books =[
{
  img:'https://m.media-amazon.com/images/I/71hvJ2eS6kL._AC_UY218_.jpg',
  title:'God is Good',
  author:'ifeoluwa oladeni'
},
 {
  img:'https://m.media-amazon.com/images/I/71rIWTdOyqL._AC_UL320_.jpg',
  title:'working on progress',
  author:'oladeni ifeoluwa'
  },
  {
  img:'https://m.media-amazon.com/images/I/71rIWTdOyqL._AC_UL320_.jpg',
  title:'God is the greatest',
  author:'oladeni oladayo'
  }
]
function BookList(){
  return (
  <section className= "book">{books.map((book)=>{
   const {img, title, author} = book;
    return(
      <Book book={book}></Book>
    )
  })}</section>
  );

};
const Book = (props) => {
 const {img, title, author}= props.book
return(
  <article className="books">
    <img src= {img} alt=""/>
    <h1>{title}</h1>
    <h4> {author} </h4>
    </article>
);
}
// const Greeting = () => {
// return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
// }
ReactDom.render(<BookList/>, document.getElementById("root"));