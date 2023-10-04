import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../images/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Burgers hold a special place in our hearts because they evoke feelings of comfort and familiarity. 
              They're a classic, go-to option that appeals to people of all ages. 
              The comforting warmth of a freshly grilled burger nestled between soft buns, often accompanied by a side of crispy fries,
               can instantly lift your spirits.Why should you always opt for Burgers? Well..
              </p>
              <ul>
                <li>
                  <p>
                  Burgers are the ultimate comfort food, offering a satisfying blend of savory flavors 
                  and textures that can instantly lift your spirits.
                  </p>
                </li>
                <li>
                  <p>With endless customization options, burgers cater to diverse tastes, 
                    allowing you to create the perfect culinary masterpiece to suit your cravings.</p>
                </li>
                <li>
                  <p>
                  Burgers are a versatile delight, 
                  equally enjoyed during quick bites on-the-go or as the centerpiece of a hearty,
                   indulgent meal - making them a timeless choice for any occasion.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

    



    </>
  );
}


export default Section4;
