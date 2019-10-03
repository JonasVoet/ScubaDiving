import React from 'react';
import './login.scss';
import "@fortawesome/fontawesome-free/css/all.css";


const Login = () => {
    const handleSubmit1 = (event) => {
        if (event) {
            event.preventDefault();
            alert("Du er nu logget ind, og kan lukke boxen");
        }

        return null;
    }

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            alert("Vi har sendt dig en mail, tjek også spam mappen");
        }

        return null;
    }


    return (
        <div className="login-container">

            <div className="box">
                <i className="fas fa-lock"></i>
                <a className="button-1" href="#popup1"><p>LOGIN</p></a>
            </div>

            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Login her</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <form onSubmit={handleSubmit1} className="login">

                            <input
                                aria-label="username"
                                type="email" id="Username"
                                name="Username" placeholder="Brugernavn"
                                required />

                            <input
                                aria-label="password"
                                type="password" id="password"
                                name="Password" placeholder="Password"
                                required />

                            <button type="submit">Login</button>
                        </form>


                        <form onSubmit={handleSubmit} className="register_user">
                            <h2>Opret Bruger her</h2>
                            <hr />

                            <input aria-label="email"
                                type="email"
                                placeholder="Email"
                                required />

                            <input
                                aria-label="brugernavn"
                                type="text" placeholder="Brugernavn"
                                pattern="[A-Za-z]{5,15}"
                                title="Der skal minimum være 5 bogstaver"
                                required />
                            <hr />


                            <input
                                aria-label="password"
                                type="password" placeholder="Password"
                                name="psw"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Der skal være min. et tal, et stort bogstav, et lille bogstav og mindst 8 eller mere tegn"
                                required />

                            <input
                                aria-label="gentag password"
                                type="password" placeholder="Gentag Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Password skal være ens"
                                required />
                            <hr />

                            <p>Når du opretter dig, går du med til vores betingelser <a href="#">Terms & Privacy</a>.</p>
                            <button type="submit" className="registerbtn">Opret</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
