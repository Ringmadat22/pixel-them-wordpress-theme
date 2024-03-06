import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./App.css"

function TestimonyMain() {
    return(
        <>
            <section className="testimony-section">
                <div className="testimony-container">
                    <div className="container-div">
                        <h1 className="testimony-h1" >Some words from our clients</h1>
                        <div className="divider" style={{height:"3px",display:"flex",width:"100%",justifyContent:"center",textAlign:"center",marginBottom:"20px"}}>
                            <div style={{width:"70px" ,height:"3px", background:"orange"}}></div>
                        </div>

                        <p className="testimony-p" style={{textAlign:"center"}}>We don't like to brag, others do it for us.</p>
                    </div>

                    <div className="testimony-slider">

                    <MDBContainer className="my-5" id="testimony-section">
                    <MDBCarousel showControls dark>
                        <div>
                        <MDBCarouselItem className="active text-center">
                            <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            alt="avatar"
                            className="rounded-circle shadow-1-strong mb-4"
                            style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                            <MDBCol lg="8">
                                <h5 className="mb-3">Maria Kate</h5>
                                <p>Photographer</p>
                                <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                quibusdam illo, beatae quia fugit consequatur laudantium velit
                                magnam error. Consectetur distinctio fugit doloremque.
                                </p>
                            </MDBCol>
                            </MDBRow>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon far icon="star" size="sm" />
                            </li>
                            </ul>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                            alt="avatar"
                            className="rounded-circle shadow-1-strong mb-4"
                            style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                            <MDBCol lg="8">
                                <h5 className="mb-3">John Doe</h5>
                                <p>Web Developer</p>
                                <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                                </p>
                            </MDBCol>
                            </MDBRow>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon far icon="star" size="sm" />
                            </li>
                            </ul>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            alt="avatar"
                            className="rounded-circle shadow-1-strong mb-4"
                            style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                            <MDBCol lg="8">
                                <h5 className="mb-3">Anna Deynah</h5>
                                <p>Web Developer</p>
                                <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                quibusdam illo, beatae quia fugit consequatur laudantium velit
                                magnam error. Consectetur distinctio fugit doloremque.
                                </p>
                            </MDBCol>
                            </MDBRow>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" />
                            </li>
                            <li>
                                <MDBIcon far icon="star" size="sm" />
                            </li>
                            </ul>
                        </MDBCarouselItem>
                        </div>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonyMain