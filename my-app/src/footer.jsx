import "./App.css"

function footer() {
    return(
        <>
            <footer>
                <div className="footer-container">
                    <section class="footer">
                        <div class="footer-row">
                            <div class="footer-col">
                            <h4 className="f-h4">Info</h4>
                            <ul class="links">
                                <li><a href="index.js">About Us</a></li>
                                <li><a href="index.js">Compressions</a></li>
                                <li><a href="index.js">Customers</a></li>
                                <li><a href="index.js">Service</a></li>
                                <li><a href="index.js">Collection</a></li>
                            </ul>
                            </div>
                            <div class="footer-col">
                            <h4 className="f-h4">Explore</h4>
                            <ul class="links">
                                <li><a href="index.js">Free Designs</a></li>
                                <li><a href="index.js">Latest Designs</a></li>
                                <li><a href="index.js">Themes</a></li>
                                <li><a href="index.js">Popular Designs</a></li>
                                <li><a href="index.js">Art Skills</a></li>
                                <li><a href="index.js">New Uploads</a></li>
                            </ul>
                            </div>
                            <div class="footer-col">
                            <h4 className="f-h4">Legal</h4>
                            <ul class="links">
                                <li><a href="index.js">Customer Agreement</a></li>
                                <li><a href="index.js">Privacy Policy</a></li>
                                <li><a href="index.js">GDPR</a></li>
                                <li><a href="index.js">Security</a></li>
                                <li><a href="index.js">Testimonials</a></li>
                                <li><a href="index.js">Media Kit</a></li>
                            </ul>
                            </div>
                            <div class="footer-col">
                            <h4 className="newsletter">Newsletter</h4>
                            <p>
                                Subscribe to our newsletter for a weekly dose
                                of news, updates, helpful tips, and
                                exclusive offers.
                            </p>
                            <form action="#">
                                <input type="text" placeholder="Your email" required></input>
                                <button type="submit">Subscribe</button>
                            </form>
                            <div class="icons">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-github"></i>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default footer