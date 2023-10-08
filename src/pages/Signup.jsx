import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './signupSigninStyles.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate('/homepage');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div id="signup">
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
        <Link to="/">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
