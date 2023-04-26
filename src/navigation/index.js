import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { ImMusic } from 'react-icons/im';

const Navigation = () => {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem("user"));

    const submitSearch = () => {
        navigate(`/search/${searchValue}`)
    }

    return(
        <nav style={{fontSize: '25px'}} className="navbar navbar-expand-lg navbar-dark bg-gradient m-2 fw-bold">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><ImMusic className="im-2x"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <form className="d-flex">
                        <input className="form-control me-sm-2 w-full" type="search" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)}/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={submitSearch}>Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Explore
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        {!currentUser && <li className="nav-item">
                            <a className="nav-link" href="/login">Login/Register</a>
                        </li>}
                        {currentUser && <li className="nav-item ml-auto">
                            <a className="nav-link" href="/profile">{currentUser["username"]}</a>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    )};
export default Navigation;