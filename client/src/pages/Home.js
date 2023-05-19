import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeSildeCont = [
  {
    id: 1,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1:
      "https://e7.pngegg.com/pngimages/327/609/png-clipart-canon-eos-7d-camera-designer-banner-digital-data-jd-com-creative-digital-camera-ad-element-electronics-lens.png",
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
    productsImg: ["", "", "", "", ""],
  },
  {
    id: 2,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1:
      "https://w7.pngwing.com/pngs/185/815/png-transparent-assorted-fruits-illustration-orange-juice-apple-juice-fruit-free-of-juice-icon-natural-foods-food-orange.png",
    imgUrl2:
      "https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2022/05/Creative-Advertisement-Which-Product-Categories-Are-Best-Suited-To-Creative-Advertising-And-Which-Type-Of-Creativity-Have-The-Most-Influence.jpg?fit=1920%2C1080&ssl=1",
    productsImg: ["", "", "", "", ""],
  },
  {
    id: 3,
    month: "May",
    isHovered: false,
    title: "My previous portfolio v.1",
    header: "Let’s Create your Own Style",
    disc: "Lease make sure you have the necessary dependencies and models imported for this code to work correctly.",
    imgUrl1:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-400x210.png",
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
    imgUrl1:
      "https://w7.pngwing.com/pngs/815/461/png-transparent-technology-toy-technology-electronics-sale-banner-brand.png",
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
    imgUrl1:
      "https://w7.pngwing.com/pngs/538/884/png-transparent-advertising-poster-cosmetic-packs-glass-other-chemistry.png",
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
    }, 1000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="landing-page">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper container"
        autoplay={{
          delay: 1000,
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
              <a href="#">
                <motion.div className="slide-card">
                  <img src={item.imgUrl1} alt="" />
                  <div className="work-card-text-cont">
                    <h4>{item.title}</h4>
                    <p>{item.disc}</p>
                  </div>
                </motion.div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Home;
