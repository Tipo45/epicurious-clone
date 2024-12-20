import { MdOutlineBookmarkAdd } from "react-icons/md";
import "../Body/Body.css";
import image2 from "../assets/Images/img-002.webp";
import image3 from "../assets/Images/img-003.webp";
import image4 from "../assets/Images/img-004.webp";
import { Rating } from "@mui/material";
import { IoCopyOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carouselheader from "../Carousel/Carousel";
import Carouselslider from "../Carousel2/Carouselslider";

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSecondDropdown = () => {
    setIsOpened(!isOpened);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: -90
    },
  };

  return (
    <>
      <div className="main-body-1">
        <div className="head">
          <h1>Top Stories</h1>
        </div>
        <hr className="divider" />

        <div className="top-stories">
          <div className="one">
            <div className="top-stories-1">
              <img src={image2} alt="" loading="lazy" />
              <div className="div-in-div">
                <p>FEATURED RECIPE</p>
              </div>
            </div>
            <div className="one-body">
              <h5>RECIPES & MENUS</h5>
              <h2>
                <a href="#">Roasted Carrots and Parsnips With Honey</a>
              </h2>
              <p>
                An easy honey-balsamic glaze makes these root veggies worthy of
                your Thanksgiving table.
              </p>
              <div className="icons">
                <Rating defaultValue={4.5} precision={0.5} readOnly />

                <MdOutlineBookmarkAdd />
              </div>
            </div>
          </div>
          <div className="two">
            <div className="top-stories-2">
              <img src={image3} alt="" />
              <div className="two-body">
                <h5>EXPERT ADVICE</h5>
                <h4>
                  <a href="#">How to Brine a Turkey in a Wet Brine</a>
                </h4>
              </div>
            </div>
          </div>
          <hr className="divider-in" />
          <div className="three">
            <div className="top-stories-3">
              <img src={image4} alt="" />
              <div className="div-inside-div">
                <IoCopyOutline />
              </div>
            </div>
            <div className="three-body">
              <h5>THANKSGIVING</h5>
              <h4>
                <a href="#">
                  47 Thanksgiving Cookie Recipes to Give Pie Some Competition
                </a>
              </h4>
            </div>
          </div>
          <div className="part-2-heading">
            <h4>Latest Recipes</h4>
          </div>
          <hr className="divide-in" />
          <div className="part-2">
            <div className="first">
              <div className="first-first-part">
                <h5>RECIPES & MENUS</h5>
                <h4>
                  <a href="#">Easy Egg Custard</a>
                </h4>
                <Rating defaultValue={4.5} precision={0.5} readOnly />
              </div>
              <div className="first-second-part">
                <img src={image2} alt="" />
                <MdOutlineBookmarkAdd />
              </div>
            </div>
            <hr className="divide-in" />
            <div className="first">
              <div className="first-first-part">
                <h5>RECIPES & MENUS</h5>
                <h4>
                  <a href="#">Mango Sticky Rice</a>
                </h4>
                <Rating defaultValue={5.0} precision={0.5} readOnly />
              </div>
              <div className="first-second-part">
                <img src={image3} alt="" />
                <MdOutlineBookmarkAdd />
              </div>
            </div>
            <hr className="divide-in" />
            <div className="first">
              <div className="first-first-part">
                <h5>RECIPES & MENUS</h5>
                <h4>
                  <a href="#">Wassail</a>
                </h4>
                <Rating defaultValue={4.5} precision={0.5} readOnly />
              </div>
              <div className="first-second-part">
                <img src={image4} alt="" />
                <MdOutlineBookmarkAdd />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-body-2">
        <div className="head">
          <h1>Expert Advice</h1>
        </div>
        <hr className="divide" />

        <div className="four">
          <div className="top-stories-4">
            <img src={image2} alt="" />
            <div className="four-body">
              <h3>
                <a href="#">
                  3 Ways to Toast Pecans So You Never Burn Them Again
                </a>
              </h3>
              <p>
                Before mixing pecans into pie- or anyhtinh else- toast them for
                maximum crunch and the richest flavour.
              </p>
            </div>
          </div>
        </div>

        <div className="four">
          <div className="top-stories-4">
            <img src={image4} alt="" />
            <div className="four-body">
              <h3>
                <a href="#">How to Cook a Turkey for Thanksgiving</a>
              </h3>
              <p>
                You`ll never need to look up a hoiday turkey recipe ever again.
              </p>
            </div>
          </div>
        </div>

        <div className="four">
          <div className="top-stories-4">
            <img src={image3} alt="" />
            <div className="four-body">
              <h3>
                <a href="#">How to Clean and Prep Mussels</a>
              </h3>
              <p>Before cooking mussles, rinse them good.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-body-3">
        <div className="head">
          <h1>RECIPES BASED ON DIETARY PREFERENCES</h1>
        </div>
        <hr className="divide" />
        <div className="header-slide">
          <Carouselheader />
        </div>

        <div className="carousel-2">
          <Carouselslider />
        </div>

      </div>

      <div className="main-body-5">
        <div className="fall-main-head">
          <h2>FALL FAVORITES</h2>
        </div>
        <hr className="fall-divider" />

        <hr className="fall-divide" />

        <div className="fall-head">
          <h1>79 Fall Recipes to Welcome Cooler Weather</h1>
        </div>

        <div className="fall">
          <div className="fall-stories">
            <img src={image2} alt="" />
            <div className="fall-body">
              <p>
                Warm up to autumn with cozy casseroles, braises, and simple
                sheet pan dinners as well as all-Nigerian jollof rice and fall
                cocktails to pour all season.
              </p>
            </div>
          </div>
          <div className="fall-carousel">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              arrows={false}
              partialVisible={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              renderButtonGroupOutside={true}
            >
              <div className="fall-carousel-first-card">
                <img src={image2} alt="" />
                <h5>RECIPES & MENUS</h5>
                <h2>31 Fall Cocktails to Sip Your Way Through</h2>
                <p>Meet our favorite flavorful drinks for fall.</p>
              </div>

              <div className="fall-carousel-second-card">
                <img src={image3} alt="" />
                <h5>RECIPES & MENUS</h5>
                <h2>Our Favorite Apple Pie</h2>
                <p>This classic apple pie recipe makes the perfect holiday</p>
                <Rating defaultValue={4} precision={0.5} readOnly />
              </div>

              <div className="fall-carousel-third-card">
                <img src={image4} alt="" />
                <h5>RECIPES & MENUS</h5>
                <h2>Simple Roast Chicken</h2>
                <p>Chef Thomas Keller&#39;s food is known for fine dining</p>
                <Rating defaultValue={3.5} precision={0.5} readOnly />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="foot-head">
          <h3>epicurious</h3>
        </div>
        <div className="foot-p">
          <p>
            Since 1995, Epicurious has been the ultimate food resource for the
            home cook, with daily kitchen tips, fun cooking videos, and, oh
            yeah, over 33,000 recipes.
          </p>
        </div>
        <div className="foot-socials">
          <FaFacebookF />
          <FaXTwitter />
          <FaPinterestP />
          <RiYoutubeLine />
          <FaInstagram />
        </div>

        <div className="foot-first-dropdown">
          <div className="dropdown-btn" onClick={toggleSecondDropdown}>
            MORE ABOUT EPICURIOUS{" "}
            {isOpened ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          {isOpened && (
            <div className="dropdown-content">
              <div className="dropdown-item">About Us</div>
              <div className="dropdown-item">The Epicurious App</div>
              <div className="dropdown-item">Newsletters</div>
              <div className="dropdown-item">Subscription FAQs</div>
              <div className="dropdown-item">Gift Guides</div>
            </div>
          )}
        </div>

        <div className="footer-second-dropdown">
          <div className="dropdown-btn" onClick={toggleDropdown}>
            CONTACT {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item">Careers</div>
              <div className="dropdown-item">Press Center</div>
              <div className="dropdown-item">Advertising</div>
              <div className="dropdown-item">Masthead</div>
              <div className="dropdown-item">Contact Us</div>
            </div>
          )}
        </div>

        <hr className="footer-divide" />

        <div className="foot-links">
          <ul>
            <li>
              <a href="#">User Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Your Nigerian Privacy Rights</a>
            </li>
            <li>
              <a href="#">Accessibility Help</a>
            </li>
            <li>
              <a href="#">Tipo Dev Store</a>
            </li>
          </ul>
        </div>
        <p className="cookies">
          <a href="#">
            <CiSettings /> Cookie Settings
          </a>
        </p>

        <div className="foot-dev">
          <p>Food Innovation Group</p>
        </div>

        <div className="foot-copy-right">
          {String.fromCharCode(169)} 2024 Tipo Dev. All rights reserved.
          Epicurious may earn a portion of sales from products that are
          purchased through our site as part of our Affiliate Partnerships with
          retailers. The material on this site may not be reproduced,
          distributed, transmitted, cached or otherwise used, except with the
          prior written permission of Tipo Dev.
        </div>
      </footer>
    </>
  );
};

export default Body;
