import React from 'react';
import ReactDom from 'react-dom'

//CSS
import './index.css';
//setup vars
const firstBook = {
  img:'https://m.media-amazon.com/images/I/71hvJ2eS6kL._AC_UY218_.jpg',
  title:'God is Good',
  author:'ifeoluwa oladeni'
}
const secondBook = {
  img:'https://m.media-amazon.com/images/I/71rIWTdOyqL._AC_UL320_.jpg',
  title:'working on progress',
  author:'oladeni ifeoluwa'
}
 
function BookList(){
  return (
  <section className= "book">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>

  </section>
  );

};
const Book = ({img,title,author}) => {
//  const {img, title, author}= props
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