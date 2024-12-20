import "../Carousel/Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carouselheader = () => {
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
      items: 3,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: -30
    },
  };

  return (
    <>
        <div className="main-carousel-5">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive} arrows={false} partialVisible={true} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
          <div className="active">All</div>
          <div className="header-slider">Vegetarian</div>
          <div className="header-slider">Vegan</div>
          <div className="header-slider">Gluten-Free</div>
          <div className="header-slider">Dairy-Free</div>
        </Carousel>
        </div>
    </>
  );
};

export default Carouselheader;
