import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {updateUserThunk} from "../../services/auth-thunks";

const EditProfile = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = useState(currentUser.username);
    const [password, setPassword] = useState(currentUser.password);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updateUser = async () => {
        try {
            await dispatch(updateUserThunk({username, password}));
            navigate("/profile");
        } catch (err) {
            alert(err);
        }
    }

    return(
        <div className="row">
            <div className="col-2 pt-3">
            </div>
            <div className="col-5">
                <h1 className="pt-3">Edit Profile</h1>
                <div className="form-group">
                    <label className="form-label mt-4" htmlFor="editUsername">Username</label>
                    <input type="text" defaultValue={currentUser.username} className="form-control" id="editUsername"
                           onChange={(e) => {
                               setUsername(e.target.value);
                           }}/>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4" htmlFor="editPassword">Password</label>
                    <input type="text" defaultValue={currentUser.password} className="form-control" id="editPassword"
                           onChange={(e) => {
                               setPassword(e.target.value);
                           }}/>
                </div>
                <button type="button" className="btn btn-primary mt-5"
                        onClick={updateUser}>
                    Update User Information</button>

            </div>
        </div>
    );
};

export default EditProfile;