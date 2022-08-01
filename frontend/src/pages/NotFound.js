import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img src="/src/img/111.avif" style={{height:'200px'}} alt='rrr'/>
      <svg src="/src/img/buds.svg" alt='svg'></svg>
      <h1>Page not found</h1>
      <Link to="/">back to main</Link>
    </div>
  );
}
