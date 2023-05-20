import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsPlayCircleFill } from "react-icons/bs";
import { addImg, tshirt, mobi, cam, grind, homeElec, bag } from "../assets";

const HomeSildeCont = [
  {
    id: 1,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1: addImg,
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
      productsImg: [tshirt, mobi, cam, grind, bag],
  },
  {
    id: 2,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1: homeElec,
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
    productsImg: [tshirt, mobi, cam, grind, bag],
  },
  {
    id: 3,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1: homeElec,
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
    productsImg: ["", "", "", "", ""],
  },
  {
    id: 4,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1:homeElec,
    imgUrl2: "",
    productsImg: ["", "", "", "", ""],
  },
  {
    id: 5,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1:homeElec,
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
    productsImg: [
      "https://w7.pngwing.com/pngs/30/502/png-transparent-assorted-appliance-lot-home-appliance-washing-machine-refrigerator-appliance-sales-promotion-kitchen-electronics-sale-tag-thumbnail.png",
      "https://w7.pngwing.com/pngs/366/181/png-transparent-flavored-milk-strawberry-fresh-strawberry-fruit-milk-cartons-watercolor-ad-watercolor-painting-natural-foods-watercolor-leaves-thumbnail.png",
      "https://w7.pngwing.com/pngs/342/140/png-transparent-long-sleeved-t-shirt-children-s-clothing-top-cool-summer-boy-miscellaneous-tshirt-childrens-clothing.png",
      "",
      "",
    ],
  },
];
const Home = () => {
  const [items, setItems] = useState(HomeSildeCont);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(((prevIndex) => prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="landing-page">
      <div className="swipper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
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
                          <div className="pro-img">
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
      </div>
    </div>
  );
};

export default Home;
