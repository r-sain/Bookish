import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/homepage');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div id="signin">
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default SignIn;
