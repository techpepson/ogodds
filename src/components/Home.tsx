import { Avatar, Button, Table, Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets";
import "../styles/home.css";
import { homeStyles } from "../styles/home-styles";
import { telegram } from "../assets/assets";
import TableRow from "./utils/tableRow";
import wonbet from "../assets/wonbet.jpg";
import whatiscashout from "../assets/whatiscashout.jpg";
import pending from "../assets/pending.jpg"

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // past slips
  const Slips = [
    {
      slip_title: "PAST SLIPS",
      odds: [
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "WON",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "LOST",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "PENDING",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "WON",
        },
      ],
      type: "FREE",
      bookingCodes: {
        sportybet: "BCSDSG1",
        onexbet: "HJHJSD7",
      },
      status: "ACTIVE",
    },
    {
      slip_title: "PAST SLIPS",
      odds: [
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "WON",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "LOST",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "PENDING",
        },
        {
          title: "UEFA Champions League",
          teams: "Barcelona vs Bayern Munchen",
          tips: "Home - Over 2.5",
          result: "WON",
        },
      ],
      type: "FREE",
      bookingCodes: {
        sportybet: "BCSDSG1",
        onexbet: "HJHJSD7",
      },
      status: "ACTIVE",
    },
  ];

  return (
    <>
      {/*home page section*/}

      <Theme>
        <div className={`max-w-7xl mx-auto ${homeStyles.defaultBg}`}>
          {/*container for the upper content of the home page.*/}
          <div
            className={`flex flex-col bg-image relative h-[700px] w-full top-98px ${homeStyles.whiteText}`}
          >
            {/*container for the texts in the upper home page section*/}
            <div className={`relative top-60 sm:top-[40%] p-2`}>
              {/*container used to rightly organize the bg image and the texts*/}
              <div className="flex flex-col sm:flex-row">
                {/*wrapper container for the ogodds welcome text and buttons*/}
                <div>
                  <div className={`${homeStyles.textSize}`}>
                    <h1 className={`font-bold ${homeStyles.headingSize}`}>
                      Welcome to OGSOO,
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
                    className={`flex gap-4 sm:gap-10 relative top-10 max-md:flex max-md:flex-col`}
                  >
                    <Button
                      radius="full"
                      color="cyan"
                      className={`${homeStyles.textSize}`}
                    >
                      <Link to="/vip">JOIN VIP PAGE</Link>
                    </Button>
                    <Button
                      radius="full"
                      color="cyan"
                      className={`${homeStyles.textSize}`}
                    >
                      <Link to="#">
                        <Avatar
                          src={telegram}
                          fallback="TG"
                          alt="Telegram logo"
                          className="h-20 w-auto mr-1"
                        />
                        JOIN TELEGRAM CHANNEL
                      </Link>
                    </Button>
                  </div>
                </div>
                {/*container for the background player images*/}
                <div className="hidden sm:block player-bg"></div>
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
            <div
              className={`${homeStyles.rawFlex} flex-wrap justify-center gap-14 mb-4`}
            >
              {images.map((img, index) => (
                <div className="flex justify-center flex-col items-center">
                  <img
                    src={img.src}
                    alt={img.describe}
                    key={index}
                    className={`rounded-md w-20 h-20`}
                  />
                  <p className={`max-w-[20ch] text-start text-md mt-2`}>
                    {img.describe}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*bottom section of the home page*/}

          <div>
            <p
              className={`text-xl text-slate-600 mt-5 mb-4 justify-center flex`}
            >
              FREE BETTING SLIPS (LIMITED)
            </p>
            <div
              className={`flex flex-col sm:flex-row justify-center items-center p-2 gap-10 align-middle`}
            >
              {/*container for the table in the bottom*/}
              <div className={`mt-5 h-full`}>
                {/*container for the table */}
                <div className="flex flex-col">
                  {Slips.map((slip) => {
                    return (
                      <>
                        <div className={`mt-5 h-full`}>
                          <div className="w-full bg-slate-100 rounded-md mb-8">
                            <div className={`flex`}>
                              <p className="w-full rounded-t-md  flex justify-between items-center bg-red-400 text-white p-2 text-xl font-semibold">
                                {slip.slip_title}

                                <span className="flex items-center gap-2">
                                  <span>{slip.status}</span>
                                  {slip.status == "WON" ? (
                                    <img
                                      src={wonbet}
                                      className="w-10 h-auto rounded-lg"
                                    />
                                  ) : slip.status == "LOST" ? (
                                    <img
                                      src={whatiscashout}
                                      className="w-10 h-auto rounded-lg"
                                    />
                                  ) : (
                                    <img
                                      src={pending}
                                      className="w-10 h-auto rounded-lg"
                                    />
                                  )}{" "}
                                </span>
                              </p>
                            </div>
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

                              {/* dynamically getting table rows */}
                              {slip.odds.map((item) => {
                                return (
                                  <TableRow
                                    title={item.title}
                                    teams={item.teams}
                                    tips={item.tips}
                                    result={item.result}
                                  />
                                );
                              })}
                            </Table.Root>

                            {/* booking codes */}
                            <div className="flex sm:flex-row flex-col items-center gap-1 justify-around p-2">
                              <div className="flex gap-2 items-center">
                                <p className="text-red-600 text-lg font-bold">
                                  SportyBet
                                </p>
                                <p className="bg-white rounded-md p-1 px-2 font-bold border-[1px] border-slate-300">
                                  {slip.bookingCodes.sportybet}
                                </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                <p className="text-blue-600 text-lg font-bold">
                                  1XBet
                                </p>
                                <p className="bg-white rounded-md p-1 px-2 font-bold border-[1px] border-slate-300">
                                  {slip.bookingCodes.onexbet}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/**
              side data of the home page
              * if user is logged in we display ads if not we display login and sign up buttons
              */}
              {isLoggedIn ? (
                <>
                  <div className="flex gap-1 sm:gap-10 flex-row sm:flex-col max-w-full">
                    <img
                      src={images[3].src}
                      className=" w-1/2 sm:w-[400px] h-auto rounded-md"
                    />
                    <img
                      src={images[4].src}
                      className=" w-1/2 sm:w-[400px] h-auto rounded-md"
                    />
                  </div>
                </>
              ) : (
                <>
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
                          <Link to="/login">Login</Link>
                        </Button>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-5 justify-center items-center`}
                    >
                      If you are a new user and don't have an account, create
                      one
                      <div className={`${homeStyles.headerBg} rounded-full`}>
                        <Button>
                          <Link to="/signup">Sign Up</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Home;
