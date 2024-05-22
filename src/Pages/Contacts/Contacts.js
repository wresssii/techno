import './Contacts.css';
import { Link } from 'react-router-dom';
import contact from '../../img/contact.webp'

function Contacts() {
  return (
    <section className="Contacts">
      <div className="contact_pages">
        <h2 className="contact_tit">Contact</h2>
        <hr />
        <div className="contact-pages flex">
          <div className="contact_text">
        <p className="contact_txt">Our contacts:</p>
        {/* <Link className="" to="https://wa.me/<0771389382>">0771 389 382</Link>
        <Link className="" to="/">0771 389 382</Link> */}
          <p className="contact_num">+996 771 389 382</p>
          <p className="contact_num">0771 389 382</p>
        </div>
        <img src={contact} alt="contact" className="contact_img" />
        </div>
        <div className="contact__pages flex">
        <iframe className="map"
			src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0ad8798afd38aa5bf6025c69a1103160f4dac4f5dd4229cd187b209152f518a&amp;source=constructor"
			width="50%" height="350" frameborder="0" ></iframe>
        <div className="contact_text">
        <p className="contact_txt">Location:</p>
          <p className="contact_num">c.Karakol st.Ch.Aitmatova 125</p>
        </div>
    </div>
      </div>
    </section>
  );
}

export default Contacts;