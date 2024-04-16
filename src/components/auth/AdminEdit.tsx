import { UserGroupIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { BarChartIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button, Flex, Radio, Text,Table, TextField } from "@radix-ui/themes";
import TableRow from "../utils/tableRow";
import React from "react";
import wonbet from "../../assets/wonbet.jpg";
import whatiscashout from "../../assets/whatiscashout.jpg";
import pending from "../../assets/pending.jpg";

const AdminEdit: React.FC = () => {
  // sslips
  const allSlips = [
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
      <div className={`max-w-7xl mx-auto w-full`}>
        {/* amount gained and current users */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full gap-8 p-4 justify-around">
          <div className="w-full space-y-4 flex justify-between bg-yellow-500/85 items-center gap-4  rounded-2xl ring-1 ring-gray-900/5 shadow-lg p-4">
            <div className="space-y-4">
              <p className="text-3xl text-white font-bold">GHS 1002234</p>
              <h2 className="text-xl leading-7 tracking-tight text-gray-100/80">
                Amount gained
              </h2>
            </div>

            <BarChartIcon className="w-28 h-28 text-gray-900/10" />
          </div>

          <div className="w-full space-y-4 flex justify-between bg-cyan-500/85 items-center gap-4 rounded-2xl ring-1 ring-gray-900/5 shadow-lg p-4">
            <div className="space-y-4">
              <p className="text-3xl text-white font-bold">2234</p>
              <h2 className="text-xl leading-7 tracking-tight text-gray-100/80">
                Vip users
              </h2>
            </div>

            <UserGroupIcon className="w-28 h-28 text-gray-900/10" />
          </div>

          <div className="w-full space-y-4 flex justify-between bg-red-700/80 items-center gap-4 rounded-2xl ring-1 ring-gray-900/5 shadow-lg p-4">
            <div className="space-y-4">
              <p className="text-3xl text-white font-bold">4234</p>
              <h2 className="text-xl leading-7 tracking-tight text-gray-100/80">
                Casual users
              </h2>
            </div>

            <UserGroupIcon className="w-28 h-28 text-gray-900/10" />
          </div>
        </div>

        {/* slips */}

        <div className="">
          <h2 className="text-center sm:m-10 text-3xl font-bold text-red-500/80">
            RECENT BETTING SLIPS
          </h2>
          <div className="flex flex-col">
            {allSlips.map((vipSlip) => {
              return (
                <>
                  <div className={`mt-5 h-full`}>
                    <div className="w-full bg-slate-100 rounded-md mb-8">
                      <div className={`flex`}>
                        <p className="w-full rounded-t-md  flex justify-between items-center bg-red-400 text-white p-2 text-xl font-semibold">
                          {vipSlip.slip_title}

                          <span className="flex items-center gap-2">
                            <span>{vipSlip.status}</span>
                            {vipSlip.status == "WON" ? (
                              <img
                                src={wonbet}
                                className="w-10 h-auto rounded-lg"
                              />
                            ) : vipSlip.status == "LOST" ? (
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
                          <Table.ColumnHeaderCell>Teams</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Tips</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>
                            Results
                          </Table.ColumnHeaderCell>
                        </Table.Header>

                        {/* dynamically getting table rows */}
                        {vipSlip.odds.map((item) => {
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
                            {vipSlip.bookingCodes.sportybet}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <p className="text-blue-600 text-lg font-bold">
                            1XBet
                          </p>
                          <p className="bg-white rounded-md p-1 px-2 font-bold border-[1px] border-slate-300">
                            {vipSlip.bookingCodes.onexbet}
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
      </div>
    </>
  );
};

export default AdminEdit;
