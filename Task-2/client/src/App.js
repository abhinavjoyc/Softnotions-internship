import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="text">
            <div className="text__field">
              <input type="text" className="text__input" placeholder="Enter Your Name" />
            </div>
            <div className="text__field">
              <input type="number" className="text__input" placeholder="Enter Your Age" />
            </div>
            <button className="button text__submit">
              <span className="button__text">Submit</span>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
//updated
