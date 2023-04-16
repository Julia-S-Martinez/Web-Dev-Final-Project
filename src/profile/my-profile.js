import React from "react";
import {Link} from "react-router-dom";
import SongList from "../song_list";
const MyProfile = () => {
    return(
        <div>
            <div className="row pt-3">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <img src="profile-pic.jpeg" className="rounded-circle w-75"/>
                        </div>
                        <div className="col-9">
                            <h1>emilygringorten</h1>
                            <p>This would be the content of the bio.</p>
                            <Link to="/edit-profile">Edit Profile</Link>
                        </div>
                    </div>
                    <h1 className="pt-3">Recently Liked</h1>
                    <SongList/>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
};

export default MyProfile;