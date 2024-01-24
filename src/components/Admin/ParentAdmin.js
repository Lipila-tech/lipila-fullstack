import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/simple-datatables/style.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import PageTitle from "./PageTitle";
import Footer from "../Layout/Footer";
import LeftSideColumns from "./LeftSideColumns";

function ParentAdmin() {
    return (
        <>
        {/* Header */}
        <Header/>
        {/* End Header */}
        {/* Side bar */}
        <Sidebar/>
        {/* End Side bar */}

            <main id="main" className="main">
                {/* Page Title */}
                <PageTitle/>
                {/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        {/* Left side columns */}
                        <LeftSideColumns/>
                        {/* End Left side columns */}
                        {/* Right side columns */}
                        {/* End Right side columns */}
                    </div>
                </section>
            </main>
            {/* End #main */}
            {/* Footer */}
            <Footer/>
            {/* End Footer */}
        </>
    )
}
export default ParentAdmin;