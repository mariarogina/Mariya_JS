import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 justify">
            <h1 className="text-success fw-bold mb-4">ABOUT</h1>
            <p className="lead py-4 my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              autem repellat corrupti error laboriosam nisi! Facere, aliquid
              facilis unde rem accusamus sed sint voluptas. Molestias ad facere
              corporis illo doloribus assumenda possimus tenetur ipsam,
              consectetur rerum quidem veniam blanditiis est magnam, inventore
              odio. A ex obcaecati natus? Perferendis error tempora ex magnam
              sapiente quae beatae repellat eaque qui vitae esse, quaerat
              excepturi ratione corrupti quam, porro similique in amet aperiam
              nostrum harum dolore eos? Eius praesentium ipsum fuga doloremque!
              Soluta quisquam nulla voluptatum maiores voluptatibus repudiandae
              autem voluptate! Numquam aspernatur minus exercitationem qui ea
              non sint reiciendis quibusdam est voluptatibus?
            </p>
            <NavLink to="/contact" className="btn btn-outline-success px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6 py-4 my-4 d-flex justify-content-center">
              <img src="./assets/img/about.jpg" alt="About" width="600px" className="mx-4 my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
