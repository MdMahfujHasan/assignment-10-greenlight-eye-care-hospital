import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <h2 style={{ color: 'tomato' }}>Please sign Up</h2>
            <form>
                <input type="email" name="" id="" />
                <br />
                <input className="mt-1" type="password" name="" id="" />
                <br />
                {/* <input type="submit" value="Submit" /> */}
                <Button className="mt-2" variant="primary">Submit</Button>
            </form>
            <br />
            <Button variant="dark">Google Sign Ip</Button>
            <br />
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default SignUp;