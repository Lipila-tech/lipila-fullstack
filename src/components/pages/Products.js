import React from "react";

const Products = () => {
    return (
        <>
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Lipila Payment Platform</h2>
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