import { useLocation } from "react-router-dom";

export default function AdminEdit() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  console.log(query.get("id"));

  // bet type
  const type = [
    { id: "free", title: "Free" },
    { id: "midnight", title: "Midnight" },
    { id: "vip", title: "Vip" },
  ];
  // bet status
  // const status = [
  //   { id: "active", title: "Active" },
  //   { id: "won", title: "Won" },
  //   { id: "lost", title: "Lost" },
  // ];
  return (
    <div className="max-w-7xl py-8 mx-auto flex flex-col sm:flex-row w-full p-1 sm:p-4 gap-4 sm:gap-8 items-center">
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {query ? "Update Betslip" : "Create Betslip"}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Once you submit slip details you will be redirected to your dashboard
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="slip_title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Slip title
          </label>
          <input
            type="text"
            name="slip_title"
            value=""
            className="ring-1 ring-gray-900/5 shadow-sm rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
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
            name="booking_codes"
            value=""
            placeholder="sportybet"
            className="ring-1 ring-gray-900/5 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
          <input
            type="text"
            name="booking_codes"
            placeholder="1xbet"
            value=""
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
              {type.map((type) => (
                <div key={type.id} className="flex items-center">
                  <input
                    id={type.id}
                    name="slip"
                    type="radio"
                    defaultChecked={type.id === "free"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor={type.id}
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    {type.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
       
        
      </div>
    </div>
  );
}
