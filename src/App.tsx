import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.less';
import styles from './App.module.less';

function App() {
  ;(function EsSyntax() {
    let a = 0;
    a ||= 1; a &&= 2; a ??= 3; // @babel/plugin-proposal-logical-assignment-operators
    a = a ?? 1; a?.toString();

    class A {
      declare foo: string; // @babel/plugin-transform-typescript | allowDeclareFields | https://babeljs.io/docs/en/babel-plugin-transform-typescript#allowdeclarefields
    }
    new A();
  })();

  return (
    <div className={`App ${styles.App}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
