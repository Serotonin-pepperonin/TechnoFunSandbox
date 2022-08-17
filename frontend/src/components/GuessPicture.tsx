import React from 'react'
// @ts-ignore
import phoneon from '../img/phoneon.svg';
// @ts-ignore
import phoneoff from '../img/phoneoff.svg';


export default function GuessPicture() {
  let a = false;
  return (
    <div style={{
      backgroundColor:'blue',
      width:'250px',
      height:'250px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'50%' }}>
      <img
      src={a ? phoneon : phoneoff}
      height="200px"
      alt="phone"
      style={{ padding: "0px 5px" }}
      />
    </div>
  )
}
