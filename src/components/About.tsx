import React from "react";
import { vini } from "../assets/assets";
import { Avatar, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
      {/*container for the about page*/}
      <div className={`container`}>
        <div>
          {/*image and text section on the upper section of the about page*/}
          <img
            src={vini}
            alt="image of football players vinicius junior and militao"
          />
          <div>
            <p>Introducing OG ODDS</p>
            <span>
              The bigger the sports events the more interest,excitement and
              media attention on the action. And the more betting markets we
              have available here at enokay89 to turn your opinions into winning
              bets. Bigger sports events coming up!!
            </span>
            <Button>
              <Link to="/">JOIN VIP PAGE</Link>
            </Button>
          </div>
        </div>
        {/*testimonials section*/}
        <div>
          <Heading>TESTIMONIALS</Heading>
          <div>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex>
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex>
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex>
                  <Text>John A. Doe</Text>
                  <span>@john_doe</span>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex>
                <Avatar src="#" fallback="JD" />
                <Flex>
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
