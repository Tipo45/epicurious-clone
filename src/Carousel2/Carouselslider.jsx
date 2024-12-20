import "../Carousel2/Carouselslider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/Images/img-004.webp";
import image2 from "../assets/Images/img-005.webp";
import image3 from "../assets/Images/img-006.webp";
import image4 from "../assets/Images/img-007.webp";
import image5 from "../assets/Images/img-008.webp";
import image6 from "../assets/Images/img-009.webp";
import { Rating } from "@mui/material";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Carouselslider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: -80,
    },
  };

  return (
    <>
      <div className="image-carousel">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          partialVisible={true}
          responsive={responsive}
        >
          <div className="carousel-images">
            <img src={image1} alt="" />
            <p>Chocolate Mousse for a Party</p>
            <div className="rate-icon">
              <MdOutlineBookmarkAdd />
              
            </div>
          </div>
          
          <div className="carousel-images">
            <img src={image2} alt="" />
            <p>Parsnips With Spiced Peanuts and ...</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={4} precision={0.5} readOnly />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image3} alt="" />
            <p>Bole and Fish</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={3.5} precision={0.5} readOnly />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image4} alt="" />
            <p>Groceries and Groundnuts</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={5} precision={0.5} readOnly />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image5} alt="" />
            <p>Spanakopita Baked Eggs</p>
            <div className="rate-icon">
              <MdOutlineBookmarkAdd />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image6} alt="" />
            <p>Cocnut Tempeh Larb</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={2.5} precision={0.5} readOnly />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image1} alt="" />
            <p>Carrot Wellington</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={3} precision={0.5} readOnly />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image2} alt="" />
            <p>Rice, Stew and Chicken</p>
            <div className="rate-icon">
              <MdOutlineBookmarkAdd />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image3} alt="" />
            <p>Fried Rice and Turkey</p>
            <div className="rate-icon">
              <MdOutlineBookmarkAdd />
            </div>
          </div>

          <div className="carousel-images">
            <img src={image4} alt="" />
            <p>Jollof Rice, Fried Plaintain and Eggs</p>
            <div className="rate-icons">
              <MdOutlineBookmarkAdd />
              <Rating defaultValue={4.5} precision={0.5} readOnly />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carouselslider;
