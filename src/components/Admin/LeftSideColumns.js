function LeftSideColumns() {
    return (
        <div className="col-lg-8">
            <div className="row">
                {/* Payments Card */}
                <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Payments <span>| Today</span>
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-currency-dollar" />
                                </div>
                                <div className="ps-3">
                                    <h6>145</h6>
                                    <span className="text-success small pt-1 fw-bold">
                                        12%
                                    </span>{" "}
                                    <span className="text-muted small pt-2 ps-1">
                                        increase
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Payments Card */}
                {/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Payments <span>| This Month</span>
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-currency-dollar" />
                                </div>
                                <div className="ps-3">
                                    <h6>$3,264</h6>
                                    <span className="text-success small pt-1 fw-bold">
                                        8%
                                    </span>{" "}
                                    <span className="text-muted small pt-2 ps-1">
                                        increase
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Revenue Card */}
                {/* Students Card */}
                <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card Students-card">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Students <span>| This Year</span>
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-people" />
                                </div>
                                <div className="ps-3">
                                    <h6>1244</h6>
                                    <span className="text-danger small pt-1 fw-bold">
                                        12%
                                    </span>{" "}
                                    <span className="text-muted small pt-2 ps-1">
                                        decrease
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Students Card */}
                {/* Reports */}
                <div className="col-12">
                    <div className="card">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Reports <span>/Today</span>
                            </h5>
                            {/* Line Chart */}
                            <div id="reportsChart" />
                            {/* End Line Chart */}
                        </div>
                    </div>
                </div>
                {/* End Reports */}
                {/* Recent Full Payments */}
                <div className="col-12">
                    <div className="card recent-Payments overflow-auto">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Recent Full Payments <span>| Today</span>
                            </h5>
                            <table className="table table-borderless datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Student</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Balance</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2457</a>
                                        </th>
                                        <td>Brandon Jacob</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                               Year 9
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$64</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2147</a>
                                        </th>
                                        <td>Bridie Kessler</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                               Year 6
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$47</td>
                                        <td>
                                            <span className="badge bg-warning">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2049</a>
                                        </th>
                                        <td>Ashleigh Langosh</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                                Year 3
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$147</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2644</a>
                                        </th>
                                        <td>Angus Grady</td>
                                        <td>
                                            <a href="#" className="text-primar">
                                               Year 1
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$67</td>
                                        <td>
                                            <span className="badge bg-danger">Rejected</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2644</a>
                                        </th>
                                        <td>Raheem Lehner</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                                Year 1
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$165</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End Recent Full Payments */}
                {/* Recent Partial Payments */}
                <div className="col-12">
                    <div className="card top-selling overflow-auto">
                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Today
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Month
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        This Year
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body pb-0">
                            <h5 className="card-title">
                                Recent Partial Payments <span>| Today</span>
                            </h5>
                            <table className="table table-borderless datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Student</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Balance</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2457</a>
                                        </th>
                                        <td>Brandon Jacob</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                               Year 9
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$64</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2147</a>
                                        </th>
                                        <td>Bridie Kessler</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                               Year 6
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$47</td>
                                        <td>
                                            <span className="badge bg-warning">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2049</a>
                                        </th>
                                        <td>Ashleigh Langosh</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                                Year 3
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$147</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2644</a>
                                        </th>
                                        <td>Angus Grady</td>
                                        <td>
                                            <a href="#" className="text-primar">
                                               Year 1
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$67</td>
                                        <td>
                                            <span className="badge bg-danger">Rejected</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <a href="#">#2644</a>
                                        </th>
                                        <td>Raheem Lehner</td>
                                        <td>
                                            <a href="#" className="text-primary">
                                                Year 1
                                            </a>
                                        </td>
                                        <td>$64</td>
                                        <td>$165</td>
                                        <td>
                                            <span className="badge bg-success">Approved</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End Recent Partial Payments */}
            </div>
        </div>
    )
}

export default LeftSideColumns;