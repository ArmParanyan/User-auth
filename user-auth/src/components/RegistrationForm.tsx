import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const RegistrationForm: React.FC = () => {
    const { register } = useUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegister = () => {
        const newUser = { name, email, password };
        register(newUser);
        history.push('/welcome');
    };

    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
                <p>
                    Already have an account? <Link to="/">Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default RegistrationForm;
