import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../reducers';
import '../App.css';

const LoginCompo = () => {
  const [userData] = useState('Mr.wander');
  const [passData] = useState('12345');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.trim() === '' || pass.trim() === '') {
      return;
    }
    if (user == userData || pass == passData) {
      await dispatch(login({ user, pass }));
      navigate('/submit');
    }
    else       alert('Invalid username or password');
    }

  return (
    <div className="overlay">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='login-button' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
    );
};

export default LoginCompo;