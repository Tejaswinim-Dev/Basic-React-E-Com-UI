import './Carousel.css'

 export function Carousel(){
    return(
        <div className='carousel'>
             <div 
                id="carouselExampleFade" 
                className="carousel slide carousel-fade"
                data-bs-ride="carousel" 
                data-bs-interval="2000">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/18c34ac79f6b71ce.jpg?q=20"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1e513363d2412d0a.jpg?q=20"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1ff44be91eab2e44.jpg?q=20"
                            className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button"
                    data-bs-target="#carouselExampleFade" 
                    data-bs-slide="prev">

                    <span className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade" 
                    data-bs-slide="next">
                    <span 
                    className="carousel-control-next-icon"
                        aria-hidden="true"></span>

                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        </div>
    )
}

