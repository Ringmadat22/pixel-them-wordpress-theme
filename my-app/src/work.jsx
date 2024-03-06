import "./App.css"


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
                    </div>
                </section>
        </>
    )    
}

export default work