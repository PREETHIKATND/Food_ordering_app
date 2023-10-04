import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../../images/burger-11.jpg";
import Image2 from "../../../images/burger-12.jpg";
import Image3 from "../../../images/burger-13.jpg";
import Image4 from "../../../images/burger-14.jpg";
import Image5 from "../../../images/burger-15.jpg";
import Image6 from "../../../images/burger-16.jpg";
import Image7 from "../../../images/burger-17.jpg";
import Image8 from "../../../images/burger-18.jpg"

import Cards from "../../../components/Layouts/Cards";
import Cart from '../Cart';
import Headers from '../../../components/Layouts/Header';
import Footer from '../../../components/Layouts/Footer';


const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 150.50,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 180,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion,beef",
    rating: 4,
    price: 169.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 110,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 225,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 270,
  },
  {
    id: "0007",
    image: Image7,
    title: "BLT Burgers",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 168,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 130.75,
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
      stars.push(<i key={`empty₹{i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Restaur1() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const handleBuyNow = () => {
    setCartItems([]);
  };


  return (
    <>
      <Headers />
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>BURGER HAVEN</h2>
              <p className="para">
              Welcome to Burger Haven, where burger dreams come true! 
              We're thrilled to have you join us on a delicious journey through the world of mouthwatering burgers. 
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
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
                addToCart={() => addToCart(cardData)}
              />
            ))}
          </Row>
          <Cart cartItems={cartItems} onBuyNow={handleBuyNow} /> 

          {/* <div className="cart">
            <h3>Shopping Cart</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - ₹{item.price}
                </li>
              ))}
            </ul>
          </div> */}

        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Restaur1;