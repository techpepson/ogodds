import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import OddsRecord from "../utils/oddsRecord";

const AdminEdit = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const query = searchQuery.get("id");

  const [bookingCodes, setBookingCodes] = useState({
    sportybet: "",
    onexbet: "",
  });
  const [odds, setOdds] = useState(
    { league: "", teams: "", tips: "", result: "" },
  );

  const [formData, setFormData] = useState({
    slip_title: "",
    type: "",
    status: "",
  });
  const [records, setRecords] = useState<JSX.Element[]>([]);
  const [recordIndex] = useState(0);

  const type = [
    { id: "free", title: "FREE" },
    { id: "midnight", title: "MIDNIGHT" },
    { id: "vip", title: "VIP" },
  ];

  const status = [
    { id: "active", title: "ACTIVE" },
    { id: "won", title: "WON" },
    { id: "lost", title: "LOST" },
  ];

  // sets other files - radio fields
  const handleOnchange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData)
  };
  
  // set booking codes
  const handleBookingCodes = (e:any) => {
    const { name, value } = e.target;
    setBookingCodes((prev) => ({ ...prev, [name]: value }));
    console.log(bookingCodes)
  };

// sets odds data
const handleOddsOnchange = (e:any) => {
  const {name,value} = e.target

  setOdds((prev) => ({
    ...prev,
    [name]:value
  }))

  console.log(odds)
}

// adds a new record field
const addNewRecord = () => {
  setRecords([
    ...records,
    <OddsRecord
      key={recordIndex}
      isNew={query ? false : true}
      handleOnchange={handleOddsOnchange}
    />,
  ]);
};
  return (
    <div className="max-w-7xl px-4 py-8 mx-auto flex flex-col sm:flex-row w-full p-1 sm:p-4 gap-4 sm:gap-8 my-8">
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          {query ? "Update Betslip" : "Create Betslip"}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Once you submit slip details you will be redirected to your dashboard
        </p>
      </div>

      <div className="flex flex-wrap gap-8 space-y-6">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="slip_title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Slip title
          </label>
          <input
            type="text"
            name="slip_title"
            onChange={handleOnchange}
            className="ring-1 ring-gray-900/5 shadow-sm rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex flex-col gap-2 space-y-8 w-full">
          <label
            htmlFor="odds"
            className="flex items-center w-full justify-between text-sm font-medium leading-6 text-gray-900"
          >
            Odds
            <div
              className="bg-yellow-500/90 p-2 rounded-lg text-white shadow-sm hover:bg-"
              onClick={addNewRecord}
            >
              <PlusIcon className="cursor-pointer w-6 h-auto" />
            </div>
          </label>
          {records.map((record, index) => (
            <div key={index}>{record}</div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="slip_title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Booking codes
          </label>
          <input
            type="text"
            name="sportybet"
            placeholder="sportybet"
            onChange={handleBookingCodes}
            className="ring-1 ring-gray-900/5 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
          <input
            type="text"
            name="onexbet"
            placeholder="onexbet"
            onChange={handleBookingCodes}
            className="ring-1 ring-gray-900/5 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Bet type
          </label>
          <p className="text-sm text-gray-500">
            What type do you prefer this slip to be?
          </p>
          <fieldset className="mt-4">
            <legend className="sr-only">Slip type</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {type.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={option.id}
                    name="type"
                    type="radio"
                    value={option.title}
                    onChange={handleOnchange}
                    defaultChecked={option.id === "free"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor={option.id}
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    {option.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Bet status
          </label>
          <p className="text-sm text-gray-500">
            What status of this slip right now?
          </p>
          <fieldset className="mt-4">
            <legend className="sr-only">Slip status</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {status.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={option.id}
                    name="status"
                    type="radio"
                    value={option.title}
                    onChange={handleOnchange}
                    defaultChecked={option.id === "active"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor={option.id}
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    {option.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
