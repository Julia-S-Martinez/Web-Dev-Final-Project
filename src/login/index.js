import {useState} from "react";
import {loginThunk, registerThunk} from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const { currentUser } = useSelector((state) => state.currentUser);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [artist, setArtist] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitRegister = async () => {
        try {
            const role = (artist ? "ARTIST" : "LISTENER");
            await dispatch(registerThunk({username, password, role}));
            navigate("/profile");
        } catch (err) {
            alert(err);
        }
    };
    const submitLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (err) {
            alert(err);
        }
    };
    const [register, setRegister] = useState(true);

    return(<form className="mx-auto d-flex flex-column w-25">
        <fieldset>
            <div className="btn-group mx-auto w-100" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check w-50" name="loginbuttons" id="loginbutton" onClick={()=>{setRegister(false)}}
                       autoComplete="off" checked={!register} readOnly/>
                <label className="btn btn-outline-primary" htmlFor="loginbutton">Login</label>
                <input type="radio" className="btn-check w-50" name="loginbuttons" id="registerbutton" onClick={()=>{setRegister(true)}}
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
            <div className="btn-group mx-auto w-100 mt-2"  aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check w-50" name="rolebuttons" id="artistbutton" onClick={()=>{setArtist(true)}}
                       autoComplete="off" checked={artist} readOnly/>
                <label className="btn btn-outline-light" htmlFor="artistbutton">Artist Role</label>
                <input type="radio" className="btn-check w-50" name="rolebuttons" id="listenerbutton" onClick={()=>{setArtist(false)}}
                       autoComplete="off" checked={!artist} readOnly/>
                <label className="btn btn-outline-light" htmlFor="listenerbutton">Listener Role</label>
            </div>

            <button type="submit" className="btn btn-primary mt-2"
            onClick={register? submitRegister : submitLogin}>
                Submit</button>
        </fieldset>
    </form>)
};

export default Login;