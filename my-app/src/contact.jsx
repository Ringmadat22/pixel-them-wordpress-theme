import "./App.css"


function contact() {
    return(
        <>
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-container-div">
                        <h1 className="contact-h1" >Contact us</h1>
                        <div className="divider" style={{height:"3px",display:"flex",width:"100%",justifyContent:"center",textAlign:"center",marginBottom:"20px"}}>
                            <div style={{width:"70px" ,height:"3px", background:"orange"}}></div>
                        </div>

                        <p className="contact-p" style={{textAlign:"center"}}>And we'll reply in no time.</p>
                    </div>

                    <div className="contact-content">
                        <div className="contact-content-main">
                            <div className="left-contact">
                                <div className="left-contact-content">
                                    <h3>Address</h3>
                                    <p>Street 221B Baker Street</p>

                                    <div>
                                        <h3>Customer Support</h3>
                                        <p>Phone: 0 332 548 954</p>
                                        <p>Email: contact@site.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="right-contact">
                                <div className="right-contact-content">
                                    <form>
                                        <input type="text" placeholder="Enter Your Name"></input>
                                        <input type="email" placeholder="Enter Your Email"></input>
                                        <textarea col="20" row="30" placeholder="Enter your Message here"></textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact