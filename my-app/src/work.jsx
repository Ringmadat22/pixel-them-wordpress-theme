import "./App.css";
import Highlight from "./images/car2.jpg";
import Button from '@mui/material/Button';

function work() {
    return(
        <>
            <section className="work-section">
                    <div className="work-container">
                        <div className="work-content">
                            <h1>Our Work</h1>

                            <div className="divider" style={{height:"3px",display:"flex",width:"100%",justifyContent:"center",textAlign:"center",marginBottom:"20px"}}>
                                <div style={{width:"80px" ,height:"3px", background:"orange"}}></div>
                            </div>

                            <p style={{textAlign:"center", fontWeight:"200"}}>It's show and tell time</p>
                        </div>

                        <div className="work">
                            <div className="work-main">
                                <div className="work-one">
                                    <div className="work-main-content">
                                        <img
                                            src={Highlight}
                                            alt="Avatar"
                                            class="image"
                                        />
                                        <div class="overlay-bottom">
                                            <div class="text">
                                            <h1 style={{fontSize:"16px"}}>WEB AGENCY</h1>
                                                <Button className="work-btn" variant="contained" size="small" >
                                                    See Project
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="work-main-content">
                                        <img
                                            src={Highlight}
                                            alt="Avatar"
                                            class="image"
                                        />
                                        <div class="overlay-bottom">
                                            <div class="text">
                                            <h1 style={{fontSize:"16px"}}>WEB AGENCY</h1>
                                                <Button className="work-btn" variant="contained" size="small" >
                                                    See Project
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="work-main-content">
                                        <img
                                            src={Highlight}
                                            alt="Avatar"
                                            class="image"
                                        />
                                        <div class="overlay-bottom">
                                            <div class="text">
                                            <h1 style={{fontSize:"16px"}}>WEB AGENCY</h1>
                                                <Button className="work-btn" variant="contained" size="small" >
                                                    See Project
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="work-main-content">
                                        <img
                                            src={Highlight}
                                            alt="Avatar"
                                            class="image"
                                        />
                                        <div class="overlay-bottom">
                                            <div class="text">
                                                <h1 style={{fontSize:"16px"}}>WEB AGENCY</h1>
                                                <Button className="work-btn" variant="contained" size="small" >
                                                    See Project
                                                </Button>
                                            </div>
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

export default work