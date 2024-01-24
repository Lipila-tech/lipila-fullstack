import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/simple-datatables/style.css";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../../Layout/Footer";

function AccountActivity() {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Account Activity</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Tables</li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table datatable">
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
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AccountActivity;