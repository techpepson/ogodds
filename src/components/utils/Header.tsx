import React from "react";
import { Link } from "react-router-dom";
import { Button, Theme } from "@radix-ui/themes";
import "../../index.css";
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
          <header>
            <div>
              {/*company name and logo section*/}
              <div>
                <img src="/" alt="company logo here" />
                <span>OG ODDS</span>
              </div>
              {/*links to navigate to different sections of the site*/}
              <div>
                <Link to="/">HOME</Link>
                <Link to="/">VIP</Link>
                <Link to="/">ABOUT</Link>
                <Link to="/">CONTACT</Link>
                <Button>LOGIN</Button>
                <Button>SIGN UP</Button>
              </div>
            </div>
          </header>
        </div>
      </Theme>
    </>
  );
};

export default Header;
