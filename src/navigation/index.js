import {useState} from "react";
import search from "../search";
import Search from "../search";
import {useNavigate} from "react-router-dom";

const Navigation = (
    {
        active = 'explore'
    }
) => {
    const [searchValue, setSearchValue] = useState("")

    const editSearch = (event) => {
        const newText = event.target.value
        setSearchValue(newText);
    };
    const navigate = useNavigate()

    const submitSearch = () => {
        navigate(`/search/${searchValue}`)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-2 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <form className="d-flex">
                        <input className="form-control me-sm-2 w-full" type="search" placeholder="Search" onChange={editSearch}/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={submitSearch}>Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/my-profile">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )};
export default Navigation;