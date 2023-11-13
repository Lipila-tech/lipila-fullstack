import CTA from '../../layout/CTA';
import Footer from '../../layout/Footer';

export default function AboutPage() {
    return (
        <div className='container'>
            <section className="text-center">
                <h2>About Us</h2>
                <p>
                    Lipila is a fintech company that is transforming the way parents pay
                    school fees in Africa. We provide a secure and convenient online platform
                    for parents to make payments, track their child's school fee history, and
                    receive reminders when payments are due.
                </p>
                <p>
                    We are passionate about making education more accessible to all children
                    in Africa. We believe that by making it easier for parents to pay school
                    fees, we can help to remove one of the barriers to education and give
                    every child the opportunity to succeed.
                </p>
            </section>
            <section className="card text-center">
                <h2>Our Team</h2>
                <p>
                    Our team is made up of experienced professionals who are passionate about
                    education and technology. We are committed to providing our customers with
                    the best possible experience.
                </p>
                <ul>
                    <li>
                        <img src="./team-member-1.jpg" alt="Team member 1" />
                        <h3>Peter Zyambo</h3>
                        <p>CEO</p>
                    </li>
                    <li>
                        <img src="./team-member-2.jpg" alt="Team member 2" />
                        <h3>Jane Doe</h3>
                        <p>CTO</p>
                    </li>
                    <li>
                        <img src="./team-member-3.jpg" alt="Team member 3" />
                        <h3>Peter Doe</h3>
                        <p>CFO</p>
                    </li>
                </ul>
            </section>
            <CTA/>
            <Footer/>
        </div>

    )
}