import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  const isSignup = mode === 'signup';

  function switchMode() {
    setMode(isSignup ? 'login' : 'signup');
    setEmail('');
    setPassword('');
    setMessage('');
    setMessageType('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setMessageType('');
    setLoading(true);

    try {
      const response = await fetch(`/api/auth/${isSignup ? 'signup' : 'login'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');

      setMessage(data.message);
      setMessageType('success');
      setPassword('');
    } catch (error) {
      setMessage(error.message || 'Could not connect to the server.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="auth-card">
        <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>
        <p className="switch-line">
          {isSignup ? 'Already a member?' : 'New here?'}{' '}
          <button className="link-button" type="button" onClick={switchMode}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </button>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="At least 6 characters"
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? 'Please wait...' : isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        {message && <p className={`message ${messageType}`} role="status">{message}</p>}
      </section>
    </main>
  );
}
