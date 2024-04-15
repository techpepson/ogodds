import React from "react";
import { vini } from "../assets/assets";
import { Avatar, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import Header from "./utils/Header";
import { homeStyles } from "../styles/home-styles";

const About: React.FC = () => {
  return (
    <>
      {/*container for the about page*/}
      <div className={`container`}>
        <Header />
        <div>
          {/*image and text section on the upper section of the about page*/}
          <img
            src={vini}
            alt="image of football players vinicius junior and militao"
            className={`w-72 rounded-md`}
          />
          <div
            className={`${homeStyles.headerBg} ${homeStyles.whiteText} flex flex-col items-center rounded-lg`}
          >
            <p className={`font-bold`}>Introducing OG ODDS</p>
            <span className={`max-w-[55ch] text-start`}>
              The bigger the sports events the more interest,excitement and
              media attention on the action. And the more betting markets we
              have available here at enokay89 to turn your opinions into winning
              bets. Bigger sports events coming up!!
            </span>
            <div
              className={`${homeStyles.headerBg} ${homeStyles.whiteText} rounded-full`}
            >
              <div>
                <Button>
                  <Link to="/" className={`${homeStyles.whiteText}`}>
                    JOIN VIP PAGE
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*testimonials section*/}
        <div className={``}>
          <Heading className={`text-[#F05E5E]`}>TESTIMONIALS</Heading>
          <div className={`flex`}>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex direction="column">
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex direction="column">
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex direction="column">
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex direction="column">
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
