import {useState} from "react";
import {loginThunk, registerThunk} from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitRegister = () => {
        try {
            dispatch(registerThunk({ username, password }));
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    };
    const submitLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    };
    const [register, setRegister] = useState(true);

    return(<form className="mx-auto d-flex flex-column w-25">
        <fieldset>
            <div className="btn-group mx-auto w-100" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check w-50" name="btnradio" id="loginbutton" onClick={()=>{setRegister(false)}}
                       autoComplete="off" checked={!register} readOnly/>
                <label className="btn btn-outline-primary" htmlFor="loginbutton">Login</label>
                <input type="radio" className="btn-check w-50" name="btnradio" id="registerbutton" onClick={()=>{setRegister(true)}}
                       autoComplete="off" checked={register} readOnly/>
                <label className="btn btn-outline-primary" htmlFor="registerbutton">Register</label>
            </div>
            <div className="form-group">
                <label htmlFor="inputUser1" className="form-label mt-1">Username</label>
                <input type="text" className="form-control" id="inputUser1"
                       placeholder="Enter username" value={username}
                       onChange={(e) => {
                           setUsername(e.target.value);}}/>

            </div>
            <div className="form-group">
                <label htmlFor="inputPassword1" className="form-label mt-2">Password</label>
                <input type="password" className="form-control" id="inputPassword1" placeholder="Enter password"
                       value={password}
                       onChange={(e) => {
                           setPassword(e.target.value);
                       }}/>
            </div>

            <button type="submit" className="btn btn-primary mt-1"
            onClick={register? submitRegister : submitLogin}>
                Submit</button>
        </fieldset>
    </form>)
};

export default Login;