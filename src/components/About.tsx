import React from "react";
import { vini } from "../assets/assets";
import { Link } from "react-router-dom";
import { homeStyles } from "../styles/home-styles";
import Testimonials from "./utils/Testimonials";

const About: React.FC = () => {
  return (
    <>
      {/*container for the about page*/}
      <div className={`max-w-7xl mx-auto overflow-hidden`}>
        <div className="m-2 sm:m-28 w-full flex sm:flex-row flex-col items-center">
          {/*image and text section on the upper section of the about page*/}
          <img
            src={vini}
            alt="image of football players vinicius junior and militao"
            className={`w-[26em] rounded-md`}
          />
          <div
            className={`rounded-2xl w-full sm:w-1/2 bg-white shadow-lg ring-1 ring-gray-900/5 p-6 text-large font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8 sm:-ml-10`}
          >
            <p className={`font-bold text-xl`}>Introducing OG ODDS</p>
            <span className={`max-w-full w-max text-start`}>
              The bigger the sports events the more interest,excitement and
              media attention on the action. And the more betting markets we
              have available here at enokay89 to turn your opinions into winning
              bets. Bigger sports events coming up!!
            </span>
            <div className={``}>
              <div>
                <button className="bg-cyan-500 p-1 rounded-lg shadow-sm px-2 mt-2">
                  <Link to="/vip" className={`${homeStyles.whiteText}`}>
                    JOIN VIP PAGE
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*testimonials section*/}
        <Testimonials />
      </div>
    </>
  );
};

export default About;
