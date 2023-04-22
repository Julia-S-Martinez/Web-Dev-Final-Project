import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileThunk } from "./auth-thunks";
function CurrentUserContext({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return children;
}

export default CurrentUserContext;