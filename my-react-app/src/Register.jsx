import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BASE_URL = "https://api.escuelajs.co/api/v1";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const UserData = {
            name: name,
            email: email,
            password: password,
        
        }


        try {
            const response = await fetch(`${BASE_URL}/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(UserData),
            });

            if (response.status === 201) {
                navigate("/login")
            } else if (response.status === 400) {
                const errorData = await response.json()
                console.log(errorData.message[0])

                setError(errorData.message[0])
                throw new Error("Oops 400")
            }

        } catch (errorMsg) {
            console.error("Error registering user:", errorMsg);

        }
    };


    return (
        <div className="auth-page">

            <div className="home">
                <a href="/">
                    <img src="/src/assets/mobiliteit.png" alt="Mobiliteit logo" className="logo" />
                </a>
            </div>


            <div className="container">


                <h1>Registreer</h1>


                <form className="register-form" onSubmit={handleRegister}>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              

                    <p>{error}</p>

                    <button type="submit">Register</button>

                    <p>Heeft u al een account? <a href="/login">Login</a></p>
                </form>
            </div>

        </div>
    )
}

export default Register