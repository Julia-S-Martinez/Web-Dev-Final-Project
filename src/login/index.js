import {useState} from "react";
import {loginThunk, registerThunk} from "../services/auth-thunks";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../redux/store";
import {current} from "@reduxjs/toolkit";


function Login() {
    const currentUser = localStorage.getItem("user");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [artist, setArtist] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitRegister = async () => {
        try {
            const role = artist ? "ARTIST" : "LISTENER";
            const newUser = {
                "username" : username,
                "password" : password,
                "role": role
            }

            const user_response = await (store.dispatch(registerThunk(
                newUser)));
            // verify that currentUser isupdated
            console.log("Just Registered", user_response['payload']);
            navigate("/profile");
        } catch (err) {
            alert(err);
        }
    };
    const submitLogin = async () => {
        try {

            const user = await store.dispatch(loginThunk({ username, password }));
            if (user) {
                console.log("Server Response Data : ", user);
                // console.log("Currently Logged In User: ", currentUser);
                navigate("/profile");
            }

        } catch (err) {
            alert(err);
        }
    };
    const [register, setRegister] = useState(true);

    return(
        <div>
            <div className="m-auto d-flex flex-column">
                <h1 className="mx-auto mt-3">Welcome to our website!</h1>
                <h4 className="mx-auto mb-3">Login or create a new account to continue:</h4>
            </div>
            <form className="mx-auto d-flex flex-column w-25 ">
                <fieldset>
                    <div className="btn-group mx-auto w-100" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check w-50" name="loginbuttons" id="loginbutton" onClick={()=>{setRegister(false)}}
                               autoComplete="off" checked={!register} readOnly/>
                        <label className="btn btn-outline-light" htmlFor="loginbutton">Login</label>
                        <input type="radio" className="btn-check w-50" name="loginbuttons" id="registerbutton" onClick={()=>{setRegister(true)}}
                               autoComplete="off" checked={register} readOnly/>
                        <label className="btn btn-outline-light" htmlFor="registerbutton">Register</label>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="inputUser1" className="form-label mt-1">Username</label>
                        <input type="text" className="form-control" id="inputUser1"
                               placeholder="Enter username" value={username}
                               onChange={(e) => {
                                   setUsername(e.target.value);}}/>

                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="inputPassword1" className="form-label mt-2">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Enter password"
                               value={password}
                               onChange={(e) => {
                                   setPassword(e.target.value);
                               }}/>
                    </div>
                    <div>
                        <h4>Choose your role:</h4>
                        <p>Listeners will be able to like and share songs with their friends.
                        Artists will have their songs displayed on their profile.</p>
                    </div>
                    <div className="btn-group mx-auto w-100 mt-2"  aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check w-50" name="rolebuttons" id="artistbutton" onClick={()=>{setArtist(true)}}
                               autoComplete="off" checked={artist} readOnly/>
                        <label className="btn btn-outline-light" htmlFor="artistbutton">Artist Role</label>
                        <input type="radio" className="btn-check w-50" name="rolebuttons" id="listenerbutton" onClick={()=>{setArtist(false)}}
                               autoComplete="off" checked={!artist} readOnly/>
                        <label className="btn btn-outline-light" htmlFor="listenerbutton">Listener Role</label>
                    </div>

                    <button type="button" className="btn btn-primary mt-4 m-auto d-flex"
                            onClick={register? submitRegister : submitLogin}>
                        Submit</button>
                </fieldset>
            </form>
        </div>
    )
};

export default Login;