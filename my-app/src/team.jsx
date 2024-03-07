import React from "react";
import "./App.css"


const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc: "https://i.imgur.com/kqx6qV7.jpg",
      name: "Sarah Doe",
      role: "Designer",
      delay: 0.1,
    },
    {
      id: 2,
      imgSrc: "https://i.imgur.com/npaEYj4.jpg",
      name: "Sarah Jane",
      role: "Designer",
      delay: 0.3,
    },
    {
      id: 3,
      imgSrc: "https://i.imgur.com/7YRGiQP.jpg",
      name: "Jane Doe",
      role: "Designer",
      delay: 0.5,
    },
  ];

  return (
    <div className="container-xxl py-6 pb-5" id="team">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0" style={{fontSize:"1.5rem"}}>Team Members</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn py-3 px-5" href="home" id="team-btn">
              Contact Us
            </a>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`col-lg-4 col-md-6 wow fadeInUp`}
              data-wow-delay={member.delay}
            >
              <div className="team-item position-relative">
                <img className="img-fluid rounded" src={member.imgSrc} alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>{member.name}</h5>
                    <span>{member.role}</span>
                    <div className="team-socials">
                        <span>

                        </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;