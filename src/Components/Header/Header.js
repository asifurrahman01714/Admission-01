import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">ADMISSION</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>

                        {
                            loggedInUser.name === "" ?
                            <li class="nav-item">
                                <Link class="nav-link active fw-bold" aria-current="page" to="/login">Log In</Link>
                            </li>
                            :
                            <li class="nav-item">
                                <Link class="nav-link active fw-bold" aria-current="page" to="/" onClick={()=> {setLoggedInUser({})}}>Log Out</Link>
                            </li>
                        }
                    </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;