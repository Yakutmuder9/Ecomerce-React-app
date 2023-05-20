import { BiChevronRight } from "react-icons/bi";
import {
  MySwipperComponent,
  MyMobileCarousel,
} from "../components/Features";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="swipper-container">
        <MySwipperComponent />
      </div>
      <div className="smart-phones">
        <div className="container">
          <div className="header">
            <h4>
              Grab the best deal on <span>smart phones</span>
            </h4>
            <a href="">
              <button>
                View All <BiChevronRight />
              </button>
            </a>
            <div className="header-txt-border"></div>
          </div>
          <div className="phone-card-carousel">
            <MyMobileCarousel />
          </div>
        </div>
      </div>
      <div className="carosel-cotntainer">
      </div>
    </div>
  );
};

export default Home;
