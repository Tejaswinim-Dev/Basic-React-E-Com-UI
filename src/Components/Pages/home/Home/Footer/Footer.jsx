import './Footer.css'
export function Footer(){
    return(
        <div>
             <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#returns">Returns</a></li>
                            <li><a href="#shipping">Shipping</a></li>
                            <li><a href="#tracking">Order Tracking</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#company">Company Information</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#press">Press</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect with Us</h3>
                        <ul className="social-media">
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#youtube">YouTube</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Download Our App</h3>
                        <div className="app-download">
                            <a
                                href="https://play.google.com/store/games?hl=en&pli=1"><img
                                    src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                                    alt="Google Play"/></a>
                            <a href="https://www.apple.com/in/app-store/"><img
                                    src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                                    alt="App Store"/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Flipkart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}