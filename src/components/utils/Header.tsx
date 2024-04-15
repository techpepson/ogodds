import React from "react";
import { Link } from "react-router-dom";
import { Button, Theme } from "@radix-ui/themes";
import "../../index.css";
import { logo } from "../../assets/assets";
import { homeStyles } from "../../styles/home-styles";
{
  /*Header section to be displayed on top of the pages*/
}
const Header: React.FC = () => {
  return (
    <>
      {/*container for the whole header section*/}
      <Theme>
        <div className="container">
          {/*header defined here*/}
          <div
            className={`${homeStyles.flexPosition} items-center ${homeStyles.headerBg} `}
          >
            {/*company name and logo section*/}
            <div className={`${homeStyles.rawFlex} max-md:hidden`}>
              <img
                src={logo}
                alt="company logo here"
                className={`${homeStyles.imgStyles}`}
              />
              <span className={`${homeStyles.whiteText}`}>OG ODDS</span>
            </div>
            {/*links to navigate to different sections of the site*/}
            <div className={`${homeStyles.flexPosition} font-sans`}>
              <Link to="/" className={`${homeStyles.whiteText}`}>
                HOME
              </Link>
              <Link to="/" className={`${homeStyles.whiteText} `}>
                VIP
              </Link>
              <Link to="/" className={`${homeStyles.whiteText}`}>
                ABOUT
              </Link>
              <Link to="/" className={`${homeStyles.whiteText}`}>
                CONTACT
              </Link>
              <Button
                variant="ghost"
                className={`rounded-full border-solid border-opacity-20 border-white`}
              >
                <Link to="/" className={`${homeStyles.whiteText}`}>
                  LOGIN
                </Link>
              </Button>
              <Button variant="ghost" className={`bg-white rounded-full`}>
                <Link
                  to="/"
                  className={`${homeStyles.whiteText} text-[#F16464]`}
                >
                  SIGN UP
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Header;
