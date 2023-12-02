import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const LoginForm: React.FC = () => {
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        login(email, password);
        history.push('/welcome');
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
