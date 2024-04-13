import React from "react";
import { phone } from "../assets/assets";
import { Button, Heading, TextArea, TextField } from "@radix-ui/themes";
import { svgassets } from "../assets/assets";

const Contact: React.FC = () => {
  return (
    <>
      <div className={`container`}>
        {/*contact page section defined here*/}
        <div>
          {/*left about page section*/}
          <div>
            <img src={phone} alt="company logo on a phone" />
            <div>
              <Heading>OG ODDS</Heading>
              <ul>
                <li>100% Genuine</li>
                <li>Free Games Available</li>
                <li>Most Trustable Source</li>
              </ul>
            </div>
          </div>
          {/*right section of the about page*/}
          <div>
            <Heading>GET IN TOUCH WITH US</Heading>
            {/*form fields to get user data*/}
            <form action="/" method="post">
              <div>
                <label htmlFor="email">Email:</label>
                <TextField.Root
                  type="email"
                  placeholder="Enter your email here"
                  name="email"
                  id="email"
                >
                  <TextField.Slot>{svgassets.email}</TextField.Slot>
                </TextField.Root>
                <label htmlFor="subject">Subject</label>
                <TextField.Root
                  name="subject"
                  type="text"
                  id="subject"
                  placeholder="Enter your subject of concern"
                >
                  <TextField.Slot>{svgassets.quote}</TextField.Slot>
                </TextField.Root>
                <TextArea placeholder="Enter your message here" />
                <Button type="submit">SEND A MESSAGE</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
