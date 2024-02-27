import React from "react";
import { Link } from "react-router-dom";
import nike_hoodie from "../../nike_hoodie.png";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img src={nike_hoodie} alt="nike hoodie" className="home__image" />
        <h1 className="home__title">SNEAKERHEAD</h1>
        <div className="home__cta">
          <Link to="/shop">
            SHOP NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
