import { BiChevronRight } from "react-icons/bi";
import {
  MySwipperComponent,
  MyMobileCarousel,
  MyFurnitureCarousel,
  MyDailyCarousel,
} from "../components/Features";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="swipper-container">
        <MySwipperComponent />
      </div>
      
      <div className="breadcrumb">Home / </div>
      <div className="carousel-row" id="mobile-category">
        <div className="container">
          <div className="header">
            <h4>
              Best deal on <span>smart phones</span>
            </h4>
            <a href="">
              <button>
                View All <BiChevronRight />
              </button>
            </a>
            <div className="header-txt-border"></div>
          </div>

          <div className="card-carousel">
            <MyMobileCarousel />
          </div>
        </div>
      </div>
      <div className="carousel-row" id="furniture-category">
        <div className="container">
          <div className="header">
            <h4>
              Top <span>Electronics Brands</span>
            </h4>
            <a href="">
              <button>
                View All <BiChevronRight />
              </button>
            </a>
            <div className="header-txt-border"></div>
          </div>
          <div className="card-carousel">
            <MyFurnitureCarousel />
          </div>
        </div>
      </div>
      <div className="carousel-row" id="daily-category">
        <div className="container">
          <div className="header">
            <h4>
              Daily <span>Essentials</span>
            </h4>
            <a href="">
              <button>
                View All <BiChevronRight />
              </button>
            </a>
            <div className="header-txt-border"></div>
          </div>
          <div className="card-carousel">
            <MyDailyCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
