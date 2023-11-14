import { Outlet, Link } from "react-router-dom";

const NavAuth = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Lipila
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/loan"> Request Loan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/grades">
                                    Grade History
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/payment">
                                    Make Payment
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Features
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/paymentinfo">
                                            Payments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="loaninfo">
                                            School fee loans
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="terms">
                                            Terms
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavAuth;