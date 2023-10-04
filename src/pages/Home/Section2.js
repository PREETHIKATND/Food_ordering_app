import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burgerlogo from "../../images/burgerlogo.png";
import Salad from "../../images/salad.png";
import Delivery from "../../images/delivery-bike.png"
import Header from "../../components/Layouts/Header";

const mockData = [
  {
    image: Burgerlogo,
    title: "Original",
    paragraph: "Our burgers are crafted with precision and passion, using only the finest, hand-selected ingredients.Each bite is an explosion of flavor, delivering the perfect blend of juiciness, tenderness, and satisfaction that defines our original quality."
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: "We meticulously curate burgers from top-notch restaurants and eateries known for their quality and standards. Our commitment to delivering premium, mouthwatering burgers ensures that every bite is an unforgettable experience. ",
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: "Experience the convenience of swift and reliable burger delivery through our food app. We've partnered with renowned burger joints to bring their delectable creations to your doorstep, ensuring that your order arrives fresh, hot, and packed with flavor.",
  },

];

function Section2() {
  return (
    <>
    <Header/>
      <section className="about_section">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              Welcome to Tasty Burger, your ultimate destination for mouthwatering burger delights delivered right to your doorstep! 
              At Tasty Burger, we're passionate about crafting the perfect burger experience for you. 
              Our journey began with a simple belief – that everyone deserves a burger that's not just tasty but a culinary masterpiece. 
              Each burger is a delicious journey, packed with unexpected flavors and toppings that'll leave your taste buds begging for more.
              From classic cheeseburgers that transport you to nostalgic moments to gourmet creations that redefine burger artistry, we have it all. 
              Satisfy your burger cravings today and savor the taste of perfection, one bite at a time.
              Indulge in a mouthwatering journey of flavor with our app's delectable burgers and click order right now!
              </p>
            
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;