const Login = (
    { register = true}
) => {
    return(<form className="mx-auto d-flex flex-column w-50">
        <fieldset>
            <div className="btn-group mx-auto" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="loginbutton" autoComplete="off" checked={!register}/>
                <label className="btn btn-outline-primary" htmlFor="loginbutton">Login</label>
                <input type="radio" className="btn-check" name="btnradio" id="registerbutton" autoComplete="off"
                       checked={register}/>
                <label className="btn btn-outline-primary" htmlFor="registerbutton">Register</label>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail1" className="form-label mt-3">Email address</label>
                <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                <label htmlFor="inputEmailConfirm" className="form-label mt-3">Confirm your email address</label>
                <input type="email" className="form-control" id="inputEmailConfirm" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" id="inputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleSelect1" className="form-label mt-4">Example select</label>
                <select className="form-select" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleSelect2" className="form-label mt-4">Example multiple select</label>
                <select multiple="" className="form-select" id="exampleSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">Example textarea</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="formFile" className="form-label mt-4">Default file input example</label>
                <input className="form-control" type="file" id="formFile"/>
            </div>
            <fieldset className="form-group">
                <legend className="mt-4">Switches</legend>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox
                            input</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked=""/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox
                            input</label>
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
    </form>)
};

export default Login;