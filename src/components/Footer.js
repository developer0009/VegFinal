import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer class="footer-distributed myfooter bg-dark">
      <div class="footer-right right-box">
        <h4 class="text-center text-light">Social Links</h4>
        <a href="#">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div class="footer-left">
        <div class="fields">
          <div class="form-left-container">
            <p class="text-center my-auto">copyright &copy; 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
