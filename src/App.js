import React from'react';

function App() {
// 1
const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const positive = array.filter(num => num > 0);

// 2

const messages = [
  {message: 'hello', error: true},  
  {message: 'javascript', error: false},  
  {message: 'lincode', error: true},  
  {message: 'react', error: true},  
  {message: 'angular', error: false}, 
  {message: 'es6', error: false}, 
];
const error = messages.filter(errorMessage => errorMessage.error === true);

// 3

const words= ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
// const newWords = words.filter((word) => word.length < 5);
// const newWords = words.map(function(word) {
//   if (word.length < 5)
//     return '*';
//   else return  word
// })
const newWords = words.map((word) => word.length < 5 ? '*' : word)

console.log(newWords);

// 4

function sendMessage(message) {
  console.log(message);
}
const msg = (message) => message;
console.log(msg('Hello world!'));

function half(number) {
  return number / 2;
}
const halfNumber = (number) => number / 2;
console.log(halfNumber(8));

function showConsole() {
  console.log('lincode');
}
const show = () => console.log('lincode');
show();

function concatWords(first, second) {
  return first + second;
}
const sum = (first,second) => first + second;
console.log(sum(2, 3));

// 5


// const justText = () => 'lincode';
function justText() {
  console.log('lincode');
}
justText();

// const logging = text => console.log(text);
function logging(text) {
  console.log(text);
}
logging('Hello, world!');

// const add = (x,y) => {
//   const z = 3;

//   return z * x * y;
// }
function add(x,y) {
  const z = 3;

  return z * x * y;
}
console.log(add(2, 3));

// const onlyPositive = (number) => {
//   if(number < 0) {
//     return false;
//   }

//   return true;
// }
function onlyPositive(number) {
  if(number < 0) {
    return false;
  }
  return true;
}
console.log(onlyPositive(-5));

  return (
    <div className="App">
      <h1>Positive Numbers</h1>
      <ul>
        {positive.map(num => <li>{num}</li>)}
      </ul>

      <h1>Errors</h1>
      <ul>
        {error.map(errorMessage => <li>{errorMessage.message}</li>)}
      </ul>

      <h1>Words</h1>
      <ul>
        {newWords.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
