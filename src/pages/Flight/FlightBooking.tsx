const FlightBooking = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 font-poppins">
      <div className="w-[90%] max-w-4xl rounded bg-white p-6 shadow-md pt-10">
        <div className="text-center text-sm font-medium text-gray-500">
          <ul className="-mb-px flex flex-wrap">
            <li className="mr-3">
              <a
                href="#"
                className="active inline-block rounded-t-lg border-b-4 border-blue-600 px-4 py-1 text-blue-950"
                aria-current="page"
              >
                FLIGHTS
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="inline-block rounded-t-lg px-4 py-1 text-gray-400">
                HOTELS
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="inline-block rounded-t-lg px-4 py-1 text-gray-400">
                CARS
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex bg-gray-50 py-6 pl-4 pr-20">
          <div className="mx-2 mr-4 w-10">
            <span className="sr-only">Arrow Path</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="28px"
              height="112px"
              viewBox="-0.5 -0.5 72 432"
            >
              <defs />
              <g>
                <path
                  d="M 32 366.53 L 32 57.47"
                  fill="none"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth={4}
                  strokeMiterlimit={10}
                  pointerEvents="stroke"
                />
                <path
                  d="M 32 387.53 L 18 359.53 L 32 366.53 L 46 359.53 Z"
                  fill="rgb(0, 0, 0)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth={4}
                  strokeMiterlimit={10}
                  pointerEvents="all"
                />
                <path
                  d="M 32 36.47 L 46 64.47 L 32 57.47 L 18 64.47 Z"
                  fill="rgb(0, 0, 0)"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth={4}
                  strokeMiterlimit={10}
                  pointerEvents="all"
                />
              </g>
            </svg>
          </div>
          <form className="w-full" action="#">
            <label className="block text-sm font-bold text-slate-700" htmlFor="origin">
              Origin
            </label>
            <input
              className="mb-4 w-full border border-transparent border-b-purple-600 bg-transparent py-2"
              type="text"
              name="origin"
              id="origin"
              defaultValue="Bucharest | OTP"
            />
            <label className="block text-sm font-bold text-slate-700" htmlFor="destination">
              Destination
            </label>
            <input
              className="mb-4 w-full border border-transparent border-b-purple-600 bg-transparent py-2"
              type="text"
              name="destination"
              id="destination"
              defaultValue="Tenerife (Canary Islands) | TFS"
            />
            <div className="mb-4 flex flex-wrap gap-6 w-full">
              <div>
                <span className="sr-only">Departure</span>
                <label className="block text-sm font-bold text-slate-700" htmlFor="departure">
                  Departure
                </label>
                <input
                  className="mb-4 border border-transparent border-b-purple-600 bg-transparent py-2"
                  type="text"
                  name="departure"
                  id="departure"
                  defaultValue="03-26-2018"
                />
              </div>
              <div>
                <span className="sr-only">Arrival</span>
                <label className="block text-sm font-bold text-slate-700" htmlFor="arrival">
                  Arrival
                </label>
                <input
                  className="mb-4 border border-transparent border-b-purple-600 bg-transparent py-2"
                  type="text"
                  name="arrival"
                  id="arrival"
                  defaultValue="03-30-2018"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700" htmlFor="passengers">
                  Passengers
                </label>
                <input
                  className="mb-4 border border-transparent border-b-purple-600 bg-transparent py-2"
                  type="text"
                  name="passengers"
                  id="passengers"
                  defaultValue="2 Adults"
                />
              </div>
            </div>
            <button className="mb-3 w-full bg-indigo-800/60 py-6 text-lg font-semibold tracking-wide text-white shadow-lg hover:bg-indigo-500/90">
              SEARCH
            </button>
            <p className="text-sm font-bold text-slate-700">Flexible on Dates?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
