import './Card.css';
import slide1 from '../../img/slider1.jpg'
import slide2 from '../../img/slider1.jpg'
import slide3 from '../../img/slider1.jpg'
import slide4 from '../../img/slider1.jpg'
import slide5 from '../../img/slider1.jpg'


function Card() {
  return (
   <div className="card">
    <img src={slide1} alt="" className="card_img" />
    <h2 className="card_tit">Apple iMac 2022</h2>
    <hr />
    <p className="card_txt">The Macbook will finally have a FaceID system or its analogue - evidence of this has been found in the bowels of the MacOS7 system..</p>
   </div>


  );
}

export default Card;