import React from 'react'
// @ts-ignore
import GuessPicture from '../components/GuessPicture.tsx'
// @ts-ignore
import GuessQA from '../components/GuessQA.tsx'
// @ts-ignore
import GuessVariants from '../components/GuessVariants.tsx'


export default function GuessThemAll() {

  return (
    <div style={{backgroundColor:'tomato', maxHeight:'90vh', borderRadius:'3vh', margin:'0', display:'flex', flexDirection:'column'}}>
      <h1 className='guesslogo'>Galaxy</h1>
      <GuessPicture></GuessPicture>
      <GuessQA></GuessQA>
      <GuessVariants sx={{alignSelf:'center'}}></GuessVariants>
      <button>Next</button>
    </div>
  );
}
