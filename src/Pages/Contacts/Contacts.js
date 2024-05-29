import './Contacts.css';
import контакты from '../../img/контакты.webp';
import tg from '../../img/tg.jpg';
import ggl from '../../img/ggl.jpg';
import tel from '../../img/tel.jpg';
import loc from '../../img/loc.jpg';
import hom from '../../img/hom.jpg'
import desk from '../../img/desk.webp'
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <section className="Contact">
      <div className="contact_in flex">
      <div className="contact_img">
      <img src={контакты} alt="contact"  />
      <img src={desk} alt="contact" className="contactdesc" />
      <div className="cont_icons">
      <div className="contact_icon flex">
      <Link to="#" target="_blank">
                <img src={hom} alt="contact" className="cont_icon" />
      </Link>
      <Link to="#" target="_blank" className="cont_txt__one">Contact Us</Link>

      </div>
      <div className="contact_icon flex">
      <Link to="https://t.me/+996771389382" target="_blank">
                <img src={tg} alt="contact" className="cont_icon" />
      </Link>
      <Link to="https://t.me/+996771389382" target="_blank" className="cont_txt__two">+996 771 389 382</Link>

      </div>
      <div className="contact_icon flex">
      <Link to="#" target="_blank">
                <img src={ggl} alt="contact" className="cont_icon" />
      </Link>
      <Link to="www.google.com" target="_blank" className="cont_txt__three">aparovasyrdykan@gmail.com</Link>
      </div>
      <div className="contact_icon flex">
      <Link to="tel:+996771389382" target="_blank">
                <img src={tel} alt="contact" className="cont_icon" />
      </Link>
      <Link to="tel:+996771389382" target="_blank" className="cont_txt__four">0771 389 382</Link>
      </div>
      <div className="contact_icon flex">
      <Link to="https://www.google.com/maps?ll=широта,долгота" target="_blank">
                <img src={loc} alt="contact" className="cont_icon" />
      </Link>
      <Link to="https://www.google.com/maps?ll=широта,долгота" target="_blank" className="cont_txt__five">c.Karakol st.Kydyr-Ake 11</Link>
      </div>
      </div>
      </div>
      <h2 className="Contact_tit">Contact Us</h2>
      </div>
      </section>
  );
}

export default Contacts;