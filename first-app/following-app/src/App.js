import React from 'react';
import Joke from './components/Joke'

let jokeData = [
  {
    id:1,
    question: 'Why did ze programma choose me?',
    answer: 'Because i must die.'
  },
  {
    id:2,
    question: 'Please help me.',
    answer: 'I\'m kinda dying here.'
  },
  {
    id:3,
    question: 'ERROR',
    answer: 'Joke is turrible'
  },
];

function App() {

  const jokeComponents = jokeData.map( joke => {
      return (<Joke joke={joke} />);
  });

  return (
    <div>
      {jokeComponents}
    </div>
    
  );
}

export default App;
