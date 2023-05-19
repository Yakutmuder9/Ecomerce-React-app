import { BsCart2, BsChevronDown } from "react-icons/bs";
import { MdMenuOpen, MdLocationOn, MdNotificationsNone } from "react-icons/md";

const Header = () => {
  const items = document.querySelectorAll(".sign-btn");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  return (
    <>
      <div className="top-notice ">
        <div className="container">
          <div className="left-notice">
            <ul>
              <li>
                <a href="contact">Contact us</a>
              </li>
              <li>
                <a href="about">About us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="right-notice ">
            <ul className="flex">
              <li>
                <a href="" className="no">
                  $ USD <BsChevronDown />
                </a>
              </li>
              <li>
                <a href="">
                  English <BsChevronDown />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header>
        <div className="main-nav container">
          <div className="logo-container ">
            <div className="filter-menu">
              <MdMenuOpen />
            </div>
            
             <a href="/"><h3>E<span>Shopping</span></h3></a> 
            
          </div>

          <div className="search-input">
            <select class="custom-select">
              <option value="All">All </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <input type="text" className="" placeholder="Search" />
          </div>

          <div className="right-side-navs-list">
            <div className="notification-icon">
              <MdNotificationsNone />
            </div>
            <div className="sign-btns">
              <button className="sign-btn active">SignUp</button>
              <button className="sign-btn ">SignIn</button>
            </div>
            <div className="cart-icon">
              <BsCart2 />
            </div>
          </div>
        </div>

        <div className="filter-nav container">
          <div className="filter-menu">
            <MdMenuOpen /> Category
          </div>
          <div className="filter-list">
            <ul>
              <li>
                Groceries <BsChevronDown />
              </li>
              <li>
                Premium Fruits <BsChevronDown />
              </li>
              <li>
                Home & Kitchen <BsChevronDown />{" "}
              </li>
              <li>
                Fashion <BsChevronDown />
              </li>
              <li>
                Elecrtonics <BsChevronDown />
              </li>
              <li>
                Beauty <BsChevronDown />
              </li>
              <li>
                Sport, Toys & Luggage <BsChevronDown />
              </li>
            </ul>
          </div>
          <div className="location ">
            <MdLocationOn /> United state, Maryland <BsChevronDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
