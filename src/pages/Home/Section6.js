import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../images/review-1.jpeg";
import User2 from "../../images/review-2.jpeg";
import User3 from "../../images/review-3.jpeg";
import User4 from "../../images/review-4.jpeg";

import '../../styles/HomeStyle.css';

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  "Burger Haven never fails to impress! 
                  Their burgers are a delightful combination of flavors, and the quality is consistently outstanding. 
                  What's even better is that Tasty Burger's delivery service is incredibly swift. 
                  I placed an order during a busy evening, and my burgers arrived hot and delicious within 30 minutes. "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY KARAN</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  "I'm a loyal customer of Dine'n Delight through the Tasty Burger website, and for a good reason. 
                  Their burgers are a culinary masterpiece, and each bite is a burst of deliciousness.
                   Plus, the delivery is always on point. I once ordered for a quick lunch, and the food was at my doorstep in just 20 minutes.
                    Tasty Burger truly lives up to its name!"
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY SANJANA</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  "Burger Bliss on Tasty Burger's platform is my go-to for burger cravings. 
                  Their burgers are consistently top-notch, with fresh ingredients and fantastic flavor combinations.
                   And when it comes to delivery, they're incredibly efficient. 
                   I ordered dinner for my family, and it arrived precisely when they promised.  "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY DHRUV</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="User-4" />
                </div>
                <p>
                  "Euphoria on the Tasty Burger app is a burger lover's dream come true.
                   The quality of their burgers is unmatched, and they always get it right. 
                   I ordered for a small get-together, and the food was delivered hot and ready in just 25 minutes. 
                   Tasty Burger's service is as tasty as their burgers!" 
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY MADHAVI</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;