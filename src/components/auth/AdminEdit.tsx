import { Button, Flex, Radio, Text, TextField } from "@radix-ui/themes";
import React from "react";
import Header from "../utils/Header";

const AdminEdit: React.FC = () => {
  return (
    <>
      <div className={`container`}>
        <div><Header/></div>
        <div>
          <form action="/" method="post">
            <label htmlFor="leagues" id="league">
              League
            </label>
            <TextField.Root name="league" id="league" />
            <label htmlFor="teams" id="teams">
              Teams
            </label>
            <TextField.Root name="teams" id="teams" />
            <label htmlFor="tips" id="tips">
              Tips
            </label>
            <TextField.Root name="tips" id="tips" />
            <label htmlFor="radios">Results:</label>
            <div>
              <Flex asChild>
                <Text as="label">
                  <Radio name="win" value="win" />
                  Win
                </Text>
              </Flex>
              <Flex asChild>
                <Text as="label">
                  <Radio name="draw" value="draw" />
                  Draw
                </Text>
              </Flex>
              <Flex asChild>
                <Text as="label">
                  <Radio name="lose" value="lose" />
                  Lose
                </Text>
              </Flex>
            </div>
            <Button type="submit">Done</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminEdit;
