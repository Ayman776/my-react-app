import {Link, useNavigate} from 'react-router-dom';


function Login () {
    const navigate = useNavigate(); // Hiermee kunnen we navigeren na login

  const handleLogin = (e) => {
    e.preventDefault(); // voorkomt dat de pagina refresh
    // Hier zou normaal een check komen of email/password klopt
    // Voor nu gaan we gewoon naar dashboard
    navigate("/dashboard");
  };

    return(
        <div className = "auth-page">

            <h1>Login</h1>

            <form className="auth-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit"> <a href="/dashboard">Login</a></button>

                  <p>Heeft u nog geen account? <a href="/register">Register</a></p>
            </form>
        </div>

    )
}

export default Login