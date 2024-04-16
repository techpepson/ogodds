import React from "react";
import { money } from "../assets/assets";
import { Button, Card } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import Vip from "./Vip";

const Premium: React.FC = () => {
  // checks if user is a vip member
  const isVip = true
  return (
    <>
      <div className={`max-w-7xl mx-auto `}>
        {isVip ? (
          <>
            <Vip />
          </>
        ) : (
          <>
            {/*premium option container*/}
            <div className="flex justify-center items-center w-full h-screen">
              {/*money bag image and amount text*/}
              <div className="flex flex-col w-full sm:w-1/3 justify-center items-center p-4 border-[0.1px] border-cyan-400/10 rounded-lg shadow-md">
                <div className="items-center flex flex-col gap-2">
                  <p className="w-full bg-gray-400 text-white p-2 rounded-lg text-white font-semibold mb-4">
                    DAILY VIP SUBSCRIPTION
                  </p>
                  <img
                    src={money}
                    alt="an image of a money container"
                    className="w-40 h-auto"
                  />
                  <p className="text-2xl font-[500] my-2 text-slate-700">
                    GHS 50
                  </p>
                </div>
                <p className="text-center my-2 text-slate-800/70 mb-2 font-[500]">
                  Our daily VIP Package is one of the best. Get premium odds
                  from OGODDS with 100% assurance. All VIP subscriptions are
                  valid until slips are won.
                </p>
                <Button>
                  <Link to="/">BUY PACKAGE</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Premium;
