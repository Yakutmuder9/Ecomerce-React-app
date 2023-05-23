import React, { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import { HomeSildeCont, dailyCont, mobileCont } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { BsPlayCircleFill } from "react-icons/bs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SwiperCore, { Navigation } from "swiper";

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

                  {/* <div className="slide-product-img">
                    {item?.productsImg.map((imgUrl, index) => {
                      return (
                        <div className="pro-img" key={index}>
                          <img src={imgUrl} alt="" />
                        </div>
                      );
                    })}
                  </div> */}
                </div>
                <div className="right-side-img">
                  <img src={item.imgUrl1} alt="" />
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
  const [isAnimated, setIsAnimated] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      let newSlidesPerView = 1.5;

      if (windowWidth >= 1200) {
        newSlidesPerView = 5;
      } else if (windowWidth >= 992) {
        newSlidesPerView = 4;
      } else if (windowWidth >= 768) {
        newSlidesPerView = 3;
      } else if (windowWidth >= 562) {
        newSlidesPerView = 2.5;
      } else if (windowWidth >= 350) {
        newSlidesPerView = 1.5;
      }

      setSlidesPerView(newSlidesPerView);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  SwiperCore.use([Navigation]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        slidesPerGroup={slidesPerView}
        // slidesPerColumnFill="row"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "swiper-button-disabled",
        }}
        className="mySwipper"
      >
        {mobileCont.map((item, index) => {
          return (
            <SwiperSlide className="product-card" key={index}>
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
                    className={`HeartAnimation ${isAnimated ? "animate" : ""}`}
                    onClick={handleClick}
                  ></div>
                </div>

                <div className="rate">
                  <MyRatingComponent value={item.rate} />
                </div>

                <h5>{item.title}</h5>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev">
          <GrFormPrevious />
        </div>
        <div className="swiper-button-next">
          <GrFormNext />
        </div>
      </Swiper>
    </div>
  );
};
export const MyFurnitureCarousel = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      let newSlidesPerView = 1;

      if (windowWidth >= 1200) {
        newSlidesPerView = 3.5;
      } 
      else if (windowWidth >= 992) {
        newSlidesPerView = 3;
      }
      else if (windowWidth >= 768) {
        newSlidesPerView = 2.5;
      }
      else if (windowWidth >= 562) {
        newSlidesPerView = 2;
      }
      else if (windowWidth >= 350) {
        newSlidesPerView = 1.5;
      }
       else {
        newSlidesPerView = 1;
      }

      setSlidesPerView(newSlidesPerView);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  SwiperCore.use([Navigation]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        // slidesPerGroup={slidesPerView}
        // slidesPerColumnFill="row"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "swiper-button-disabled",
        }}
        className="mySwipper"
      >
        {mobileCont.map((item, index) => {
          return (
            <SwiperSlide className="product-card" key={index}>
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
                    className={`HeartAnimation ${isAnimated ? "animate" : ""}`}
                    onClick={handleClick}
                  ></div>
                </div>

                <div className="rate">
                  <MyRatingComponent value={item.rate} />
                </div>

                <h5>{item.title}</h5>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev">
          <GrFormPrevious />
        </div>
        <div className="swiper-button-next">
          <GrFormNext />
        </div>
      </Swiper>
    </div>
  );
};

export const MyDailyCarousel = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      let newSlidesPerView = 1.5;

      if (windowWidth >= 1200) {
        newSlidesPerView = 5;
      } else if (windowWidth >= 992) {
        newSlidesPerView = 4;
      } else if (windowWidth >= 768) {
        newSlidesPerView = 3;
      } else if (windowWidth >= 562) {
        newSlidesPerView = 2.5;
      } else if (windowWidth >= 350) {
        newSlidesPerView = 2;
      }

      setSlidesPerView(newSlidesPerView);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    console.log("Current Index:", swiper.realIndex);
  };

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  SwiperCore.use([Navigation]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        // slidesPerGroup={slidesPerView}
        // slidesPerColumnFill="row"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "swiper-button-disabled",
        }}
        onSlideChange={handleSlideChange}
        className="mySwipper"
      >
        {dailyCont.map((item, index) => {
          return (
            <SwiperSlide className="product-card" key={index}>
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
                    className={`HeartAnimation ${isAnimated ? "animate" : ""}`}
                    onClick={handleClick}
                  ></div>
                </div>

                <div className="rate">
                  <MyRatingComponent value={item.rate} />
                </div>

                <h5>{item.title}</h5>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev">
          <GrFormPrevious />
        </div>
        <div className="swiper-button-next">
          <GrFormNext />
        </div>
      </Swiper>
    </div>
  );
};

// export const Breadcrumb = ({ items }) => {
//   return (
//     <nav aria-label="breadcrumb">
//       <ol className="breadcrumb">
//         {items.map((item, index) => (
//           <li key={index} className="breadcrumb-item">
//             {index === items.length - 1 ? (
//               <span className="breadcrumb-text">{item.text}</span>
//             ) : (
//               <a href={item.url} className="breadcrumb-link">
//                 {item.text}
//               </a>
//             )}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };

