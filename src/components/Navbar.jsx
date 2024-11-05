import { FaPizzaSlice, FaLock, FaCartArrowDown, FaUser, FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <a className="navbar-brand fw-bold" href="#">
                    Pizzería Mama Mía!
                </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-light me-2">
                                <FaPizzaSlice className="me-2" />
                                Home
                            </button>
                        </a>
                        
                        {token ? (
                            <>
                                <a className="nav-link" href="#">
                                    <button className="btn btn-outline-light me-2">
                                        <FaUser className="me-2" />
                                        Profile
                                    </button>
                                </a>
                                <a className="nav-link" href="#">
                                    <button className="btn btn-outline-light">
                                        <FaSignOutAlt className="me-2" />
                                        Logout
                                    </button>
                                </a>
                            </>
                        ) : (
                            <>
                                <a className="nav-link" href="#">
                                    <button className="btn btn-outline-light me-2">
                                        <FaLock className="me-2" />
                                        Login
                                    </button>
                                </a>
                                <a className="nav-link" href="#">
                                    <button className="btn btn-outline-light">
                                        <FaLock className="me-2" />
                                        Register
                                    </button>
                                </a>
                            </>
                        )}
                    </div>

                    <div className="d-flex">
                        <button className="btn btn-outline-primary">
                            <FaCartArrowDown className="me-2" />
                            Total: $ {total.toLocaleString()}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
