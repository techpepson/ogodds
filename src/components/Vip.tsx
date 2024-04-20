import { Table } from "@radix-ui/themes";
import TableRow from "./utils/tableRow";
import { images } from "../assets/assets";
import wonbet from "../assets/wonbet.jpg";
import whatiscashout from "../assets/whatiscashout.png";
import pending from "../assets/pending.jpg";

export default function Vip() {

  // past slips
  const vipSlips = [
    {
      slip_title: "VIP SLIP",
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
      status: "LOST",
    },
    {
      slip_title: "VIP SLIPS",
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
      status: "LOST",
    },
  ];
  return (
    <div>
      <div>
        <p
          className={`text-2xl text-red-400 shadow-sm mt-5 mb-4 font-semibold justify-center flex`}
        ></p>
        <div
          className={`flex flex-col sm:flex-row justify-center items-center m-10 sm:m-2 p-2 gap-10 align-middle`}
        >
          {/*container for the table */}
          <div className="flex flex-col">
            {vipSlips.map((vipSlip) => {
              return (
                <>
                  <div className={`mt-5 h-full`}>
                    <div className="w-full bg-slate-50 rounded-md mb-8">
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
        </div>
      </div>
    </div>
  );
}
