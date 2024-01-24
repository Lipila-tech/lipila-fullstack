

function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    {/* End Dashboard Nav */}

                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#forms-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-journal-text" />
                            <span>Forms</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul
                            id="forms-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="forms-elements.html">
                                    <i className="bi bi-circle" />
                                    <span>Form Elements</span>
                                </a>
                            </li>

                            <li>
                                <a href="forms-validation.html">
                                    <i className="bi bi-circle" />
                                    <span>Form Validation</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* End Forms Nav */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#tables-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-layout-text-window-reverse" />
                            <span>Tables</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul
                            id="tables-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >

                            <li>
                                <a href="/account-activity">
                                    <i className="bi bi-circle" />
                                    <span>Account Activity</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* End Tables Nav */}

                    {/* End Charts Nav */}

                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/users-profile">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </a>
                    </li>
                    {/* End Profile Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/faq">
                            <i className="bi bi-question-circle" />
                            <span>F.A.Q</span>
                        </a>
                    </li>
                    {/* End F.A.Q Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/admin-contact">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </aside>
            {/* End Sidebar*/}
        </>

    )
}
export default Sidebar;