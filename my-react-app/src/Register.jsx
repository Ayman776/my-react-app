import {Link, useNavigate } from 'react-router-dom';


function Register (){

     const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Hier kan je nieuwe account logica toevoegen
    navigate("/"); // stuurt terug naar login na registratie
  };


    return(
        <div className="auth-page">

            <h1>register</h1>

            <form ClassName=" auth-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit"> <a href="/dashboard">Register</a></button>

                <p>Heeft u al een account? <a href="/login">Login</a></p>
            </form>


        </div>
    )
}

export default Register