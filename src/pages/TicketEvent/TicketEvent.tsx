import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const CAROUSEL_DATA = [
  {
    id: 1,
    star: "Depache Mode",
    title: "Global Spirit Tour",
    img: "https://iriscovetbook.com/wp-content/uploads/2017/08/DM_2.jpg",
  },
  {
    id: 2,
    star: "Coldplay",
    title: "A head full of dreams Tour",
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/F8FA/production/_116083736_mediaitem116083735.jpg.webp",
  },
  {
    id: 3,
    star: "Greenday",
    title: "World Tour",
    img: "https://www.cheatsheet.com/wp-content/uploads/2020/06/green-day-all-3.jpg",
  },
];

const TicketEvent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700">
      <div className="relative bg-[#273238] text-white/95 shadow-lg max-w-2xl my-8">
        <div className="rounded after:gradient-overlay">
          <img className="w-full saturate-150" src="https://i.postimg.cc/Fz4TQSqg/muse.jpg" alt="muse-concert-jpg" />
        </div>
        <div className="mx-12 -mt-9 mb-8 relative z-10">
          <h2 className="leading-loose text-2xl z-10">MUSE World Tour 2017</h2>
          <button className="-mt-6 rounded-md font-bold bg-orange-500 text-white px-4 py-2 float-right">
            BUY TICKET
          </button>
          <p className="text-lg mb-1">
            <FaMapMarkerAlt className="inline-block mr-1" color={"white"} /> Berlin, Germany
          </p>
          <p className="text-lg mb-4">
            <FaRegClock className="inline-block mr-1" color={"white"} /> 19 Aug 2017
          </p>
          <p className="w-[75%]">
            Parturient in libero eiusmod aliquet vitae. Tellus pharetra porttitor massa, donec dictumst ante nec eu, ut
            mauris venenatis vehicula sociosqu. Laoreet tristique integer potenti
          </p>
          <h4 className="text-sm text-orange-500 font-bold tracking-wide">Read More</h4>
        </div>
        <div className="mt-3 mb-9 ml-12">
          <span className="sr-only">Recommended Section</span>
          <h3 className="uppercase font-bold mb-3 text-xl">Recommended</h3>
          <div className="flex overflow-x-scroll no-scrollbar">
            {CAROUSEL_DATA.map((item) => (
              <div
                className="min-w-[250px] min-h-[180px] mr-5 flex bg-cover justify-start items-end drop-shadow-lg"
                key={item.id}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {/* <img className="object-cover min-h-full" src={item.img} alt="" /> */}
                <div className="p-3 bg-gradient-to-b w-full from-gray-800/10 to-gray-800/60">
                  <p className="font-bold text-sm">{item.star}</p>
                  <p className="text-xs">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketEvent;
