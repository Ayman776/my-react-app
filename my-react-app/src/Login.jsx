import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const correctEmail = "Ayman@mobiliteit.nl"
const correctPassword = "1234567890"


function Login() {
    const navigate = useNavigate(); // Hiermee kunnen we navigeren na login

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email); // voorkomt dat de pagina refresh
        // Hier zou normaal een check komen of email/password klopt
        // Voor nu gaan we gewoon naar dashboard
      
        if (email === correctEmail && password === correctPassword) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="auth-page">

            <div className="container">

           

            <h1>Login</h1>

            <form className="auth-form" onSubmit={handleLogin}>
                <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>

                <p>Heeft u nog geen account? <a href="/register">Register</a></p>
            </form>
             </div>
        </div>

    )
}

export default Login