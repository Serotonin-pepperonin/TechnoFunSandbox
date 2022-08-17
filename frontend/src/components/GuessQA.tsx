import React from 'react';


export default function GuessQA(answer, question) {
  const [isAnswer, setIsAnswer] = React.useState(false)
  if(isAnswer){
    return
      <h1>{answer}</h1>
  }
  return
    <h1>{question}</h1>
}
