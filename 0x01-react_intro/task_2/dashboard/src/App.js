import logo from './Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <section className='form-input'>
          <section className='input'>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' id='email' />
          </section>
          <section className='input'>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' />
          </section>
          <button>OK</button>
        </section>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
