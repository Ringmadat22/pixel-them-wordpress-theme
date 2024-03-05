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

            <section className="counter">
                <div className="counter-container">

                    <div class="all">

                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-1">
                                    <div class="fill-1"></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-1"></div>
                                </div>
                                <div class="inside-circle">  <br /> 
                                    <div className="inside-circle-content">
                                        <h1>85%</h1>
                                        <span>Web Development</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-2">
                                <div class="fill-2"></div>
                                    </div>
                                <div class="mask half">
                                    <div class="fill-2"></div>
                                </div>
                                <div class="inside-circle"><br /> 
                                    <div className="inside-circle-content">
                                        <h1>65%</h1>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-3">
                                    <div class="fill-3"></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-3"></div>
                                </div>
                                <div class="inside-circle">  <br />  
                                <div className="inside-circle-content">
                                        <h1>75%</h1>
                                        <span>SEO Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-4">
                                    <div class="fill-4"></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-4"></div>
                                </div>
                                <div class="inside-circle">  <br />  
                                <div className="inside-circle-content">
                                        <h1>99%</h1>
                                        <span>Digital Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default solution