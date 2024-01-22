import React from "react";

function Footer(){
    return (
        <section className="">
  {/* Footer */}
  <footer
    className="bg-dark"
  >
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: CTA */}
      <section className="">
        <p className="d-flex justify-content-center align-items-center text-white">
          <span className="me-3">Register for free</span>
          <a
          href="/register"
            data-mdb-ripple-init=""
            type="button"
            className="btn btn-outline-light btn-rounded"
          >
            Sign up!
          </a>
        </p>
      </section>
      {/* Section: CTA */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3 text-white"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2024 Copyright:
      <a className="text-white" href="#">
        Lipila.tech
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</section>

    )
}

export default Footer;