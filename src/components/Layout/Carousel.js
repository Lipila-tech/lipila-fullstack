import int from '../../images/int.jpg'
import mobile from '../../images/mobile.jpg'
import pay from '../../images/pay.jpg'


export default function Carousel() {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mobile} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={pay} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={int} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}