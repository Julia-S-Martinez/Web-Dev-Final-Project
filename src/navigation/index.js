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

    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark m-2 ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="search" placeholder="Search" onChange={editSearch}/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={submitSearch}>Search</button>
                </form>
            </div>
        </div>
    </nav>
    )};
export default Navigation;