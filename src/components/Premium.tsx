import React from "react";
import { money } from "../assets/assets";
import { Button, Card } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Premium: React.FC = () => {
  return (
    <>
      <div className={`container`}>
        {/*premium option container*/}
        <div>
          {/*money bag image and amount text*/}
          <Card>
            <div>
              <p>DAILY VIP SUBSCRIPTION</p>
              <img src={money} alt="an image of a money container" />
              GHS 50
            </div>
            <p>
              Our daily VIP Package is one of the best. Get premium odds from
              OGODDS with 100% assurance. All VIP subscriptions are valid until
              slips are won.
            </p>
            <Button>
              <Link to="/">BUY PACKAGE</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Premium;
