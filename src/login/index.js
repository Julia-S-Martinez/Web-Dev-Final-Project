import {useState} from "react";
import {loginThunk} from "../services/users-thunks";

const Login = (
    {}
) => {

    const [register, setRegister] = useState(true);

    const regEmail = <><label htmlFor="inputEmailConfirm" className="form-label mt-1">Confirm your email address</label>
    <input type="email" className="form-control mt-1" id="inputEmailConfirm" aria-describedby="emailHelp"
           placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
        else.</small></>;
    const regPass = <><label htmlFor="inputPassword1" className="form-label mt-1">Verify your password</label>
        <input type="password" className="form-control" id="inputPassword2" placeholder="Enter password"/></>;

    return(<form className="mx-auto d-flex flex-column w-25">
        <fieldset>
            <div className="btn-group mx-auto w-100" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check w-50" name="btnradio" id="loginbutton" onClick={()=>{setRegister(false)}}
                       autoComplete="off" checked={!register}/>
                <label className="btn btn-outline-primary" htmlFor="loginbutton">Login</label>
                <input type="radio" className="btn-check w-50" name="btnradio" id="registerbutton" onClick={()=>{setRegister(true)}}
                       autoComplete="off" checked={register}/>
                <label className="btn btn-outline-primary" htmlFor="registerbutton">Register</label>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail1" className="form-label mt-1">Email address</label>
                <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                {(register ? regEmail : null)}

            </div>
            <div className="form-group">
                <label htmlFor="inputPassword1" className="form-label mt-2">Password</label>
                <input type="password" className="form-control" id="inputPassword1" placeholder="Enter password"/>
                {(register ? regPass : null)}
            </div>

            <button type="submit" className="btn btn-primary mt-1">Submit</button>
        </fieldset>
    </form>)
};

export default Login;