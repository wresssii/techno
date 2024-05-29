import './Home.css';
import { Link } from "react-router-dom";
import footer from '../../img/footer.jpg'
import home from '../../img/homeimg.jpg';
import Button from '../../Components/Button/Button'
import Card from '../../Components/Card/Card'


function Home() {
  return (
    <section className="Home">
      <div className="container">
        <div className="home_pages flex">
      <img src={home} alt="home" className="homeimg" />
    
    <div className="home_text">
      <h2 className="home_tit">Gadjets</h2>
      <p className="home_txt">Online store "Gadjets" is one of the leading suppliers of non-standard modern equipment in the field of security, security, wireless and IP video surveillance, wireless GSM alarm, equipment for searching for "wiretapping" and various interesting gadgets for work and entertainment. We have made sure that on the virtual shelves of our store you can buy the maximum of useful, high-quality and interesting products at affordable prices.</p>
      <a href="/about"  className="homeBtn Btn">Read More</a>
      </div>
      </div>

    <div className="home_card flex">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>


        <div className="flex Home_in">
        <div className="location">
            <h2 className="footer_tit">Location</h2>
            <iframe className="map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0ad8798afd38aa5bf6025c69a1103160f4dac4f5dd4229cd187b209152f518a&amp;source=constructor"
              width="50%" height="350" frameborder="0" ></iframe>
          </div>

          <img src={footer} alt="home" className="footerimg" />


          
        </div>
      </div>
    </section>
  );
}

export default Home;