import './About.css'
import about from '../../img/1.jpg'
import two from '../../img/2.jpg'
import three from '../../img/3.jpg'

function About() {
  return (
    <section className="About">
        <h1 className="about_tit">About Us</h1>
        <hr />
        <div className="about_pages flex">
        <p className="about_txt">In the online store "Gadjets" you can order and purchase household appliances, climatic equipment, TVs, audio-video equipment, computers and components for them.</p>
        <p className="about_txt">Gadjets is a store of gadget lovers, it contains unique copies that have no analogues in the world. If you want to buy something useful and unique, you've come to the right place. Every day we are looking for new gadgets that can make life easier for an ordinary person. Our main office is located in Kiev, but we send parcels all over the world.</p>
        </div>





        <div className="about_card">
          <div className="about_left">
            <div className="about_img">
              <img src={about} alt="about" />
            </div>
          </div>
          <div className="about_right">
            <h2 className="sec_tit" data-number="01">Gadgets of the future live here</h2>
            <p className="sec_txt">Every day we are looking for innovative developments in all areas that simplify the life of an ordinary person. Only here you will find the latest novelties from Kickstarter, IndieGoGo, we monitor every startup.</p>
          </div>
        </div>

        <div className="about_card">
          <div className="about_left">
          <h2 className="sec_tit" data-number="02">We control the quality of all gadgets</h2>
            <p className="sec_txt">EMany products in our store do not have warranty service around the world, in order to somehow protect customers, we have introduced a minimum warranty on all gadgets - a month. With many manufacturers, we have warranty service agreements, due to this we can provide a longer warranty - up to a year.</p>
          </div>
          <div className="about_right">
          <div className="about_img">
              <img src={two} alt="about" />
            </div>
          </div>
        </div>



        <div className="about_card">
          <div className="about_left">
            <div className="about_img">
              <img src={three} alt="about" />
            </div>
          </div>
          <div className="about_right">
            <h2 className="sec_tit" data-number="03">Store warranty for all gadgets</h2>
            <p className="sec_txt">Every day we are looking for innovative developments in all areas that simplify the life of an ordinary person. Only here you will find the latest novelties from Kickstarter, IndieGoGo, we monitor every startup.</p>
          </div>
        </div>

    </section>
  );
}

export default About;