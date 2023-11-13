const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-0">About Lipila</h5>
            <p className="text-dark">Lipila is a fintech company that is transforming the way parents pay school fees in Africa.</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-0">Contact Us</h5>
            <ul className="list-unstyled text-dark">
              <li>
                <a href="mailto:info@lipila.com">info@lipila.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-0">Quick Links</h5>
            <ul className="list-unstyled text-dark">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="container" />
      <div className="container text-center py-3">
        <p>&copy; 2023 Lipila. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
