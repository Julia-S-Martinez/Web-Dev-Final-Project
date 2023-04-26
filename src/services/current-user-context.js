import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk } from "./auth-thunks";
function CurrentUserContext({ children }) {
    let { currentUser } = useSelector((state) => state.currentUser);
    // const dispatch = useDispatch();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            currentUser = JSON.parse(loggedInUser);
        }
    }, []);
    return children;
}

export default CurrentUserContext;