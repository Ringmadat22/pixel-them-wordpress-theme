import './App.css';


function Hero() {
    return(
      <>
        <div className='hero-container' style={{display:"flex", justifyContent:"center"}}>
          <div className='hero-main' style={{marginTop:"200px", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className="hero-main" >
              <h1 className="hero-h1" style={{fontSize:"2rem", color:"orange", marginBottom:"40px", textAlign:"center"}}>
                WELCOME TO PIXELNOVA LITE
              </h1>

              <div className="divider" style={{height:"10px",display:"flex",width:"100%",justifyContent:"center",textAlign:"center"}}>
                <div style={{width:"50px" ,height:"4px", background:"orange"}}></div>
              </div>

              <h2 className="hero-h2" style={{display:"flex", justifyContent:"center", aligneItems:"center",margin:"20px 0", fontSize:"3.5rem", width:"100%",color:"#fff"}}>
                Free & Modern One-Page Parallax WordPress Theme
              </h2>

              <p className="hero-p" style={{display:"flex", justifyContent:"center", aligneItems:"center", color:"#fff", fontSize:"20px"}}>
                Your cool business headline here. You can even insert <span className="hero-span" style={{textDecoration:"underline", padding:"0 10px"}}>
                HTML here & images</span>. Lorem ipsum dolor sit amet lorem dolor sit amet.
              </p>

              <div className="hero-buttons-container" style={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:"40px"}}>
                <div className="hero-buttons">
                  <button className="no-background" style={{background:"inherit"}}>
                    LEARN MORE
                  </button>

                  <button className="has-background" style={{background:"orange" , border:"2px solid orange", color:"#fff "}}>
                    CONTACT US
                  </button>

              </div>
              </div>
          
            </div>
          </div>
        </div>
      </>
    )
}

export default Hero