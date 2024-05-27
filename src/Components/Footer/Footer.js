import "./Footer.css";
import footer from '../../img/footer.jpg';
import telegram from '../../img/telegram.svg';
import whatsapp from '../../img/whatsapp.svg';
import google from '../../img/google.svg';

function Footer() {
  return (
    <section className="footer">
      <div className="container">
    <footer>
    <img src={footer} alt="home" className="footerimg" />
    
    <hr />
    <h2 className="footer_tit">Follow Us</h2>
    <div className="footer_icons flex">
    <img src={telegram} className="footer_icon" alt="https://t.me/+996771389382" />
    <img src={whatsapp} className="footer_icon" alt="https://wa.me/qr/ZKENQUAYR4RKN1" />
    <img src={google} className="footer_icon" alt="#" /> 
    </div>

    <hr />
    <h2 className="footer_tit">Location</h2>
    <iframe className="map"
			src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0ad8798afd38aa5bf6025c69a1103160f4dac4f5dd4229cd187b209152f518a&amp;source=constructor"
			width="50%" height="350" frameborder="0" ></iframe>

    
    </footer>

  

    </div>
    </section>
  );
}

export default Footer;
