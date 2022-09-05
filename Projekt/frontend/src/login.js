import axios from "axios";
import { useState } from "react";
import Web from "./web";
import Register from "./register"
import "./login.css"

const Login = ()=> {

    const [login1, setLogin1] = useState(true);

    const [login2, setLogin2] = useState(false);

    const regis = ()=>{
        setLogin2(!login2);
    }

    const Hlogin =(x)=>{
        x.preventDefault();
        let req={
            email: document.getElementById("Email").value, 
            password:  document.getElementById("Password").value,
        };
        axios.post("http://localhost:5000/logowanie", req).then((res)=>{
            setLogin1(false);
        }).catch((er) => {
            setLogin1(true);
        });
    };
    return(
        <div>
            {login1? (login2? <Register/>:
            <div className="kontener">
                <form action="" onSubmit={Hlogin}>
                    <label htmlFor="">Email</label>
                    <input type="text" id="Email"/>
                    <label htmlFor="">Password</label>
                    <input type="text" id="Password"/>

            <button type="submit" className="sub">Zaloguj</button>
            <button type="submit" className="sub" onClick={regis}>Zarejestruj się</button>
            </form>
            </div>
            ):(<Web/>)}
        </div>
    );
};
export default Login;