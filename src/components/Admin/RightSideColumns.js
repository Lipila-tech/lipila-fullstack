function RightSideColumns() {
    return (
        <div className="col-lg-4">
            {/* Recent Activity */}
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
                        Recent Activity <span>| Today</span>
                    </h5>
                    <div className="activity">
                        <div className="activity-item d-flex">
                            <div className="activite-label">32 min</div>
                            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                            <div className="activity-content">
                                Quia quae rerum{" "}
                                <a href="#" className="fw-bold text-dark">
                                    explicabo officiis
                                </a>{" "}
                                beatae
                            </div>
                        </div>
                        {/* End activity item*/}
                        <div className="activity-item d-flex">
                            <div className="activite-label">56 min</div>
                            <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                            <div className="activity-content">
                                Voluptatem blanditiis blanditiis eveniet
                            </div>
                        </div>
                        {/* End activity item*/}
                        <div className="activity-item d-flex">
                            <div className="activite-label">2 hrs</div>
                            <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                            <div className="activity-content">
                                Voluptates corrupti molestias voluptatem
                            </div>
                        </div>
                        {/* End activity item*/}
                        <div className="activity-item d-flex">
                            <div className="activite-label">1 day</div>
                            <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                            <div className="activity-content">
                                Tempore autem saepe{" "}
                                <a href="#" className="fw-bold text-dark">
                                    occaecati voluptatem
                                </a>{" "}
                                tempore
                            </div>
                        </div>
                        {/* End activity item*/}
                        <div className="activity-item d-flex">
                            <div className="activite-label">2 days</div>
                            <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                            <div className="activity-content">
                                Est sit eum reiciendis exercitationem
                            </div>
                        </div>
                        {/* End activity item*/}
                        <div className="activity-item d-flex">
                            <div className="activite-label">4 weeks</div>
                            <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                            <div className="activity-content">
                                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                            </div>
                        </div>
                        {/* End activity item*/}
                    </div>
                </div>
            </div>
            {/* End Recent Activity */}
            {/* Budget Report */}
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
                <div className="card-body pb-0">
                    <h5 className="card-title">
                        Budget Report <span>| This Month</span>
                    </h5>
                    <div
                        id="budgetChart"
                        style={{ minHeight: 400 }}
                        className="echart"
                    />
                </div>
            </div>
            {/* End Budget Report */}
            {/* Website Traffic */}
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
                <div className="card-body pb-0">
                    <h5 className="card-title">
                        Website Traffic <span>| Today</span>
                    </h5>
                    <div
                        id="trafficChart"
                        style={{ minHeight: 400 }}
                        className="echart"
                    />
                </div>
            </div>
            {/* End Website Traffic */}
            {/* News & Updates Traffic */}
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
                <div className="card-body pb-0">
                    <h5 className="card-title">
                        News &amp; Updates <span>| Today</span>
                    </h5>
                    <div className="news">
                        <div className="post-item clearfix">
                            <img src="assets/img/news-1.jpg" alt="" />
                            <h4>
                                <a href="#">Nihil blanditiis at in nihil autem</a>
                            </h4>
                            <p>
                                Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                                sed ut harum...
                            </p>
                        </div>
                        <div className="post-item clearfix">
                            <img src="assets/img/news-2.jpg" alt="" />
                            <h4>
                                <a href="#">Quidem autem et impedit</a>
                            </h4>
                            <p>
                                Illo nemo neque maiores vitae officiis cum eum turos elan
                                dries werona nande...
                            </p>
                        </div>
                        <div className="post-item clearfix">
                            <img src="assets/img/news-3.jpg" alt="" />
                            <h4>
                                <a href="#">
                                    Id quia et et ut maxime similique occaecati ut
                                </a>
                            </h4>
                            <p>
                                Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                                ipsam et totam...
                            </p>
                        </div>
                        <div className="post-item clearfix">
                            <img src="assets/img/news-4.jpg" alt="" />
                            <h4>
                                <a href="#">Laborum corporis quo dara net para</a>
                            </h4>
                            <p>
                                Qui enim quia optio. Eligendi aut asperiores enim
                                repellendusvel rerum cuder...
                            </p>
                        </div>
                        <div className="post-item clearfix">
                            <img src="assets/img/news-5.jpg" alt="" />
                            <h4>
                                <a href="#">Et dolores corrupti quae illo quod dolor</a>
                            </h4>
                            <p>
                                Odit ut eveniet modi reiciendis. Atque cupiditate libero
                                beatae dignissimos eius...
                            </p>
                        </div>
                    </div>
                    {/* End sidebar recent posts*/}
                </div>
            </div>
            {/* End News & Updates */}
        </div>
    )
}

export default RightSideColumns;