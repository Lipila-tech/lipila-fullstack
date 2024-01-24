import React from "react";
import "./Products.css"

const Products = () => {
    return (
        <>
            <h3 className="heading-title">Products</h3>
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs">
                <div className="container">
                    <h4>The Lipila Payment Platform</h4>
                    <p>
                        Lipila is the easiest way to manage your fee collections, payments, and
                        disbursements, all on one Platform.
                    </p>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* ======= Products Section ======= */}
            <section id="products" className="products">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Collections
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate trideta storacalaperda mastiro dolore
                                    eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Disbursements
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate trideta storacalaperda mastiro dolore
                                    eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="product-item">
                                <div className="product-content">
                                    <h3>
                                        <a href="product-details.html">Collections</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End Product Item*/}
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="product-item">
                                <div className="product-content">
                                    <h3>
                                        <a href="product-details.html">Disbursements</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End Product Item*/}
                    </div>
                </div>
            </section>
            {/* End Products Section */}
        </>
    )
}

export default Products;