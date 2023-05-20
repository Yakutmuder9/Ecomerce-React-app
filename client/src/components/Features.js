import React, { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import { HomeSildeCont, mobileCont } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { BsPlayCircleFill } from "react-icons/bs";

export const MySwipperComponent = () => {
  const [items, setItems] = useState(HomeSildeCont);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000000000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000000000000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <SwiperSlide
              className={`swiper-slide ${isActive ? "active" : ""}`}
              key={item.id}
            >
              <motion.div className="slide-card-cont">
                <div className="left-slide-cont">
                  <h6>That lease make sure you!</h6>
                  <h2>Let’s Create your Own Style</h2>
                  <p>
                    Lease make sure you have the necessary dependencies and
                    models imported for this code to work correctly.
                  </p>
                  <div className="start-btns">
                    <button className="first-btn btn">Start Shopping</button>
                    <button className="play-btn ">
                      {" "}
                      <BsPlayCircleFill />
                      Play Video
                    </button>
                  </div>

                  <div className="slide-product-img">
                    {item?.productsImg.map((imgUrl, index) => {
                      return (
                        <div className="pro-img" key={index}>
                          <img src={imgUrl} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="right-side-img">
                  <img src={item.imgUrl1} alt="" />
                  {/* <div className="work-card-text-cont">
              <h4>{item.title}</h4>
              <p>{item.disc}</p>
            </div> */}
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export const MyRatingComponent = ({ value }) => {
  const [rating, setRating] = useState(value);

  const filledStars = Math.floor(rating);
  const partialStarPercentage = (rating - filledStars) * 100;

  return (
    <div className="rating-container">
      <div className="rating">
        <Rating
          count={5}
          size={18}
          value={filledStars}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
          classNames="rating-starts"
        />
        {partialStarPercentage > 0 && (
          <div style={{ position: "relative", marginTop: "-34px" }}>
            <div
              style={{
                position: "absolute",
                width: `${partialStarPercentage}%`,
                overflow: "hidden",
              }}
            >
              <Rating
                count={1}
                size={24}
                value={1}
                edit={false}
                isHalf={true}
                activeColor="#ffd700"
              />
            </div>
          </div>
        )}
        <p> {rating} Rating</p>
      </div>
    </div>
  );
};

export const MyMobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardCount, setCardCount] = useState(getCardCount());
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  useEffect(() => {
    function handleResize() {
      setCardCount(getCardCount());
      const maxIndex = Math.max(0, mobileCont.length - cardCount);
      setCurrentIndex((prevIndex) => Math.min(prevIndex, maxIndex));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardCount, mobileCont.length]);

  function getCardCount() {
    const breakpoints = [
      { width: 0, cards: 1 },
      { width: 600, cards: 2 },
      { width: 900, cards: 3 },
      { width: 1200, cards: 4 },
      { width: 1500, cards: 5 },
    ];

    const breakpoint = breakpoints.find(
      ({ width }) => window.innerWidth < width
    );
    return breakpoint ? breakpoint.cards : 1;
  }

  function handlePrevClick() {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    console.log("pre", cardCount, currentIndex);
  }

  function handleNextClick() {
    const maxIndex = Math.max(0, mobileCont.length - cardCount);
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : maxIndex
    );
    console.log("nex", cardCount, currentIndex);
  }

  return (
    <>
      <div className="carousel-wrapper">
        <div
          className={`cards-container ${currentIndex === 0 ? "start" : ""} ${
            currentIndex === mobileCont.length - cardCount ? "end" : ""
          }`}
          style={{ "--current-index": currentIndex, "--card-count": cardCount }}
        >
          {mobileCont.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="img-cont">
                  <img src={item.imgUrl} alt="" />
                </div>

                <div className="off-sale">
                  50% <br /> Off
                </div>
                <div className="card-body">
                  <div className="price">
                    <div className="price-num">
                      <p>${item.newPrice}</p>
                      <p>${item.oldPrice}</p>
                    </div>

                    <div
                      className={`HeartAnimation ${
                        isAnimated ? "animate" : ""
                      }`}
                      onClick={handleClick}
                    ></div>
                  </div>

                  <div className="rate">
                    <MyRatingComponent value={item.rate} />
                  </div>

                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {currentIndex !== 0 && (
        <button className="prev-btn" onClick={handlePrevClick}>
          &lt;
        </button>
      )}
      {currentIndex !== mobileCont.length - cardCount && (
        <button className="next-btn" onClick={handleNextClick}>
          &gt;
        </button>
      )}
    </>
  );
};

