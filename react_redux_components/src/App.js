import React from "react";
import "./App.css";
import {useDispatch, useSelector} from 'react-redux';
import { getElementValue } from './index';

function Components() {
  const elementValue = useSelector(state => state);
  const dispatch = useDispatch();
    return (
      <div>
        <div id="Header">
          <header className="header">
            <h2>HEADER</h2>
            <p>{elementValue}</p>
          </header>
        </div>
        <div id="container">
          <section>
            <nav className="navigation">
              <h2>SIDE BAR</h2>
            </nav>
            <article className="content">
              <h1>CONTENT</h1>
              <input id = 'name' className = 'input' placeholder = 'Enter a Name'></input><br></br>
              <button className = 'submitbtn' onClick ={() => dispatch(getElementValue())} >SUBMIT</button>
            </article>
          </section>
        </div>
        <div id="Footer">
          <footer className="footer">
            <h2>FOOTER</h2>
            <p>{elementValue}</p>
          </footer>
        </div>
      </div>
    );
}

export default Components;
