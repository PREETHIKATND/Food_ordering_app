import React from 'react'
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'


import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../images/img1_restaurant1.jpeg";
import Image2 from "../../images/img2_rest2.jpeg";
import Image3 from "../../images/img3_rest3.jpeg";
import Image4 from "../../images/rest4_img4.jpeg"
import Cards from "../Restaurant/Cards.jsx";



export default function Restaurant() {


  const mockData = [
    {
      id: 1,
      image: Image1,
      title: "Burger Haven",
      paragraph: "Italian | Indian ",
      rating: 5,
      price: 99.15,
    },
    {
      id: 2,
      image: Image2,
      title: "Euphoria",
      paragraph: "Asian | Fusion",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: 3,
      image: Image3,
      title: "Burger Bliss",
      paragraph: "American",
      rating: 4,
      price: 69.15,
    },
    {
      id: 4,
      image: Image4,
      title: "Dine'n Delight",
      paragraph: "Chinese | North-Indian",
      rating: 4,
      price: 69.15,
    },
  ];

  const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };
  return (
    <div>

      <Header />
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>RESTAURANT LIST</h2>
              <p className="para">
                Dive into a world of mouthwatering madness with our extraordinary restaurants. From towering stacks of sizzling meat to adventurous veggie creations, their crazy burgers redefine culinary creativity.
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
               renderRatingIcons={renderRatingIcons}
                cardKey={cardData.id}
              >
              </Cards>
            ))}
          </Row>

        </Container>
      </section>
      <Footer />

    </div>
  )
}
