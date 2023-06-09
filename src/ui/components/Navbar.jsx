import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const navigateLogIn = () =>{
        console.log("outside")
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/travels"
                    >
                        Travels
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/crear"
                    >
                        Create Travel
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button onClick={navigateLogIn} className='nav-item nav-link btn'>
                        Log Out
                    </button>
                </ul>
            </div>
        </nav>
    )
}