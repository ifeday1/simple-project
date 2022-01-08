import React from 'react';
import ReactDom from 'react-dom'

// function Greeting(){
//   return (
//   <div>
//   <h4>This is ife and this is my first component</h4>
//   </div>
//   );
// };

const Greeting = () => {
return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
}
ReactDom.render(<Greeting/>, document.getElementById("root"));