import './Delivery.css';
import delivery from '../../img/delivery.webp'

function Delivery() {
  return (
    <section className="Delivery">
      <div className="delivery_pages">
      <div className="delivery_left">
      <img src={delivery} alt="delivery" className="delivery" />
      </div>
      <div className="delivery_right">
      <div className="delivery_text">
      <h2 className="delivery_tit">Delivery</h2>
      <p className="delivery_txt">Online store "Techno Mir" delivers any goods free of charge within the city of Bishkek, by its own Delivery Service. Delivery to suburban areas and distant regions of Kyrgyzstan is carried out at the rates of long-distance deliveries, at the time of placing the order.</p>
      <p className="delivery_txt">And you can also use the services of "urgent courier delivery in the city of Bishkek" from our store from 500 soms, provided that it is delivered by our courier.</p>
      <p className="delivery_txt">Delivery time does not exceed more than 2 days from the moment of order confirmation through the sales manager.</p>
      </div>
      <a href="https://wa.me/qr/ZKENQUAYR4RKN1" target="_blank" className="delivery_cont">To Write</a>
      </div>
      </div>
    </section>
  );
}

export default Delivery;