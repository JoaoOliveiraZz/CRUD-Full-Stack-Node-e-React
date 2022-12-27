
import './App.css';
import { FaUserAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="Container">
      <div className='form-container'>
        <div className='form-header'>
          <h1>Sign up</h1>
        </div>
        <form className='register-form'>
          <div className='input-container'>
            <FaUserAlt  className='icon'/>
            <input placeholder='Nome' type='text' name='Nome' className='register-input'></input>
          </div>
          <div className='input-container'>
            <input type='email' name='Email' className='register-input' placeholder='Email'></input>
          </div>
          <div className='input-container'>
            <input type='password' name='Senha' className='register-input' placeholder='Senha'></input>
          </div>
          <button>Criar registro</button>
        </form>
      </div>
    </div>
  );
}

export default App;
