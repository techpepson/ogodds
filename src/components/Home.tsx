import { Avatar, Button, DropdownMenu, Table, Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./utils/Header";
import { images } from "../assets/assets";
import "../styles/home.css";
import { homeStyles } from "../styles/home-styles";
import { telegram } from "../assets/assets";
const Home: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {/*home page section*/}

      <Theme>
        <div className={`container ${homeStyles.defaultBg}`}>
          <Header />
          {/*container for the upper content of the home page.*/}
          <div
            className={`flex flex-col bg-image relative h-[700px] w-full top-98px ${homeStyles.whiteText}`}
          >
            {/*container for the texts in the upper home page section*/}
            <div className={`relative top-[40%]`}>
              {/*container used to rightly organize the bg image and the texts*/}
              <div className="flex">
                {/*wrapper container for the ogodds welcome text and buttons*/}
                <div>
                  <div className={`${homeStyles.textSize}`}>
                    <h1 className={`font-bold ${homeStyles.headingSize}`}>
                      Welcome to OG ODDS,
                    </h1>
                    <p
                      className={`${homeStyles.wrapText} ${homeStyles.textSize}`}
                    >
                      Your No.1 sports prediction channel, we provide you with
                      amazing and accurate bet tips and predictions.
                    </p>
                  </div>
                  {/*buttons on the upper section of the home page*/}
                  <div
                    className={`flex gap-10 relative top-10 max-md:flex max-md:flex-col`}
                  >
                    <Button
                      radius="full"
                      color="cyan"
                      className={`${homeStyles.textSize}`}
                    >
                      <Link to="/">JOIN VIP PAGE</Link>
                    </Button>
                    <Button
                      radius="full"
                      color="cyan"
                      className={`${homeStyles.textSize}`}
                    >
                      {/* <Avatar src={telegram} fallback="TG" alt="Telegram logo" /> */}
                      JOIN TELEGRAM CHANNEL
                    </Button>
                  </div>
                </div>
                {/*container for the background player images*/}
                <div className="player-bg "></div>
              </div>
            </div>
          </div>
          {/*mid-section of the homepage*/}
          <div
            className={`flex flex-col justify-center items-center gap-5 mt-5`}
          >
            <p>
              <span
                className={`text-[#F16464] ${homeStyles.headingSize} font-bold`}
              >
                POPULAR
              </span>{" "}
              <span
                className={`font-bold text-white ${homeStyles.headingSize}`}
              >
                LEAGUES
              </span>
            </p>
            {/*scrolling images*/}
            <div className={`${homeStyles.rawFlex}`}>
              {images.map((img, index) => (
                <div className="flex justify-center flex-col items-center">
                  <img
                    src={img.src}
                    alt={img.describe}
                    key={index}
                    className={`rounded-full w-10 h-10`}
                  />
                  <p className={`max-w-[20ch] text-start text-sm`}>
                    {img.describe}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*bottom section of the home page*/}

          <div>
            <p
              className={`text-xl text-slate-500 mt-5 mb-4 justify-center flex`}
            >
              FREE BETTING SLIPS (LIMITED)
            </p>
            <div
              className={`flex justify-center items-center gap-10 align-middle`}
            >
              {/*container for the table in the bottom*/}
              <div className={`mt-5`}>
                <div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <div className={`flex`}>
                        <p
                          onClick={() => {
                            toggleDropdown();
                          }}
                        >
                          PAST SLIPS
                        </p>
                        {!isDropdownOpen ? (
                          <DropdownMenu.TriggerIcon />
                        ) : (
                          <DropdownMenu.Separator />
                        )}
                      </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <Table.Root>
                          <Table.Header>
                            <Table.ColumnHeaderCell>
                              League
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Teams
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Tips
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Results
                            </Table.ColumnHeaderCell>
                          </Table.Header>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                        </Table.Root>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
                {/*Free hot odds dropdown*/}
                <div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <div className={`flex`}>
                        <p
                          onClick={() => {
                            toggleDropdown();
                          }}
                        >
                          PAST SLIPS
                        </p>
                        {!isDropdownOpen ? (
                          <DropdownMenu.TriggerIcon />
                        ) : (
                          <DropdownMenu.Separator />
                        )}
                      </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <Table.Root className="h-full">
                          <Table.Header>
                            <Table.ColumnHeaderCell>
                              League
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Teams
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Tips
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Results
                            </Table.ColumnHeaderCell>
                          </Table.Header>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                        </Table.Root>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
                {/*Midnight odds dropdown*/}
                <div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <div className={`flex`}>
                        <p
                          onClick={() => {
                            toggleDropdown();
                          }}
                        >
                          PAST SLIPS
                        </p>
                        {!isDropdownOpen ? (
                          <DropdownMenu.TriggerIcon />
                        ) : (
                          <DropdownMenu.Separator />
                        )}
                      </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <Table.Root className="h-full">
                          <Table.Header>
                            <Table.ColumnHeaderCell>
                              League
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Teams
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Tips
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                              Results
                            </Table.ColumnHeaderCell>
                          </Table.Header>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.RowHeaderCell>
                              International Friendlies
                            </Table.RowHeaderCell>
                            <Table.Cell>Denmark vs Switzerland</Table.Cell>
                            <Table.Cell>Over 15 goals</Table.Cell>
                            <Table.Cell>Empty</Table.Cell>
                          </Table.Row>
                        </Table.Root>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
              </div>
              {/*side data of the home page*/}
              <div className={`flex flex-col gap-5`}>
                <div
                  className={`${homeStyles.rawFlex} gap-5 flex flex-col  justify-center items-center`}
                >
                  <p className={`max-w-[30ch] text-start`}>
                    Are you ready to make money with our
                    <span className={`text-red-500`}> authentic </span>
                    odds? If you already have an account
                  </p>
                  <div className={`${homeStyles.headerBg} rounded-full`}>
                    <Button>
                      <Link to="/">Login</Link>
                    </Button>
                  </div>
                </div>
                <div
                  className={`flex flex-col gap-5 justify-center items-center`}
                >
                  If you are a new user and don't have an account, create one
                  <div className={`${homeStyles.headerBg} rounded-full`}>
                    <Button>
                      <Link to="/">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Home;
