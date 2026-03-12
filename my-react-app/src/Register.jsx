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

            <div className="container">


            <h1>Registreer</h1>


            <form className="register-form" onSubmit={handleRegister}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>

                <p>Heeft u al een account? <a href="/login">Login</a></p>
            </form>
</div>

        </div>
    )
}

export default Register