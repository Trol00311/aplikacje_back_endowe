import axios from "axios";
import { useState } from "react"
import './register.css'

const initialState ={
    Email:"",
    Name:"",
    Password:"",
}

const Register = () => {
    const [regis, SetRegis] = useState(initialState);

    const { Name, Email, Password } = regis;

    const addUser = async (x) => {
        const res = await axios.post("http://localhost:5000/addUser", x);
        if (res.status === 200) {
            window.confirm("Użytkownik dodany");
        }
    };

    const sub = (x) => {
        x.preventDefault();
        if (!Name || !Email || !Password) {
            console.log("dodałem użytkownika do bazy");
        } else {
                addUser(regis);
            window.location.reload()
        }
    };

    const inputChange = (x) => {
        let { name, value } = x.target;
        SetRegis({ ...regis, [name]: value });
    };


    return(
        <div className="kontener">
            <form action="" className="form" onSubmit={sub}>
                <label htmlFor="Email">Email</label>
                <input id="Email"  name="Email" type="text" onChange={inputChange} value={Email}/>
                <label htmlFor="Name">Name</label>
                <input id="Name"  name="Name" type="text" onChange={inputChange} value={Name}/>
                <label htmlFor="Password">Password</label>
                <input id="Password" name="Password" type="text" onChange={inputChange} value={Password}/>
                <button type="submit" className="sub">Zarejestruj</button>
            </form>
        </div>

    );
};
export default Register;