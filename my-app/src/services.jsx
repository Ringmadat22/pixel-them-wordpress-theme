import "./App.css"

function solution(){
    return (
        <>
            <section className="services-section">
                <div className="services-container">
                    <div className="services-main">
                        <h1 className="services-h1">
                        We build solutions for your everyday problems.
                        </h1>

                        <div className="divider" style={{height:"3px",display:"flex",width:"100%",justifyContent:"center",textAlign:"center",marginBottom:"20px"}}>
                            <div style={{width:"70px" ,height:"3px", background:"orange"}}></div>
                        </div>
                        
                        <p className="services-p" style={{marginBottom:"40px"}}>
                            This is what we do in a nutshell
                        </p>

                        <p className="services-p">
                            Creative ut tincidunt nibh, varius cursus nunc. Curabitur molestie, metus vel luctus euismod, mi libero laoreet odio, eu dapibus leo tortor sit amet purus. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <div className="services-h4-content">
                            <h4 className="services-h4">
                                Working with Pixova has been an experience for a lifetime. I strongly reccommend these guys for their awesome support. Erlich Bachman, Aviato
                            </h4>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default solution