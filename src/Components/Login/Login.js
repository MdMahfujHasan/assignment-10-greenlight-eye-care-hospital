import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2 style={{ color: 'tomato' }}>Please login</h2>
            <Button variant="primary" onClick={signInUsingGoogle}>Google Login</Button>
            <br />
            <Link to="/signup">New User?</Link>
        </div>
    );
};

export default Login;