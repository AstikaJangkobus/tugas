import logo from './logo.svg';
import './Hello.css';

function Hello() {
  return (
    <div className="Hello">
      <header className="Hello-header">
        <img src={logo} className="Hello-logo" alt="logo" />
        <p>
          Edit <code>src/Hello.js</code> and save to reload.
        </p>
        <a
          className="Hello-link"
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

export default Hello;
