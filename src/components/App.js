import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <>
      <button data-testid="button-restart">Restart</button>
      <button data-testid="button-prev">Prev</button>
      <button data-testid="button-next">Next</button>
    </>
  )
}


export default App;
