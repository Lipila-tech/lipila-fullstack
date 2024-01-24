

function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    © Copyright{" "}
                    <strong>
                        <span>Lipila</span>
                    </strong>
                    . All Rights Reserved
                </div>
            </footer>
            {/* End Footer */}
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </>
    )
}

export default Footer;