import React from "react";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div class="row">
        <div class="col-6">
        <h5>Visit us on social media</h5>

        <a style={{ color: "#3b5998" }} href="#!" role="button">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>

        <a class="ms-3" style={{ color: "#55acee" }} href="#!" role="button">
          <i class="fab fa-twitter fa-lg"></i>
        </a>

        <a class="ms-3" style={{ color: "#dd4b39" }} href="#!" role="button">
          <i class="fab fa-google fa-lg"></i>
        </a>

        <a class="ms-3" style={{ color: "#ac2bac" }} href="#!" role="button">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
        </div>
        <div class="col-6">
            <h5>Feel free to contact us anytime!</h5>
            phone number: 0785126895
        </div>
      </div>
    </footer>
  );
}

export default Footer;
