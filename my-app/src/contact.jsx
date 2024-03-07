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

                    </div>
                </div>
            </section>
        </>
    )
}

export default contact