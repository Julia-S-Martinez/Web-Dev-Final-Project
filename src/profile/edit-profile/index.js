import React from "react";
import {Link} from "react-router-dom";

const EditProfile = () => {
    return(
        <div className="row bg-opacity-25 bg-black">
            <div className="col-2 pt-3">
            </div>
            <div className="col-5">
                <h1 className="pt-3">Edit Profile</h1>
                <div className="row">
                    <div className="col-12 pb-1">
                        <img height={200} width={200} className="rounded-3" src="profile-pic.jpeg"/>
                    </div>
                    <div className="col-8">
                        <a className="fw-bold">Edit Profile Picture</a>
                        <input className="form-control" type="file" id="formFile" title="Edit Profile Picture"/>
                    </div>
                </div>
                <label htmlFor="inputUsername" className="form-label mt-4">Username</label>
                <input type="username" className="form-control" id="inputPassword" placeholder="Username"/>
                <label htmlFor="inputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" id="inputPassword1" placeholder="Password"/>
                <label htmlFor="inputEmail" className="form-label mt-4">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="email"/>
                <p className="pt-3 fw-bold">Bio</p>
                <div className="input-group">
                        <textarea className="form-control h-auto w-50" aria-label="With textarea"
                                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non erat ut sapien
                        molestie tempor at non libero. Nullam mattis volutpat tellus, iaculis ultrices odio finibus eu.
                        Morbi tempus, massa a posuere eleifend, ipsum est sollicitudin ex, et congue eros sem vitae
                        purus."></textarea>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;