import "./Footer.css";
import telegram from '../../img/telegram.svg';
import whatsapp from '../../img/whatsapp.svg';
import google from '../../img/google.svg';
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot_in flex">
          <div className="foot_block">
            <Logo />
            <p className="foot_txt">We understand that each of our clients has their own unique needs and preferences, so we offer an individual approach to each of them. Work with ease, live with pleasure - this is our goal. Gadgets - innovative solutions for your home and office. </p>
          </div>
          <div className="foot_block">
            <div className="foot_nav">
              <nav className="foot_tit">
                <div class="footer_nav">
                  <span class="footer_tit">Pages</span>
                  <ul class="footer_list">
                    <li>
                    <Link to="/" target="_blank" className="footer_txt">Home</Link>
                    </li>
                    <li>
                    <Link to="/about" target="_blank" className="footer_txt">About</Link>
                    </li>
                    <li>
                    <Link to="/delivery" target="_blank" className="footer_txt">Delivery</Link>
                    </li>
                    <li>
                    <Link to="/contacts" target="_blank" className="footer_txt">Contact</Link>
                    </li>
                    <li>
                    <Link to="#" target="_blank" className="footer_txt">Product</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="foot_block">
            <h2 className="footer_tit">Follow Us</h2>
            <div className="footer_icons flex">
              <Link to="https://t.me/+996771389382" target="_blank">
                <img src={telegram} className="footer_icon" alt="" />
              </Link>
              <Link to="https://wa.me/qr/ZKENQUAYR4RKN1" target="_blank">
                <img src={whatsapp} className="footer_icon" alt="" />
              </Link>
              <Link to="https://t.me/+996771389382" target="_blank">
                <img src={google} className="footer_icon" alt="#" />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <p className="foot_tit"> © All rights reserved </p>

      </div>
    </footer>

  );
}

export default Footer;
