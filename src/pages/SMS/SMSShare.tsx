import { FaBell } from "react-icons/fa";

const SMSShare = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-100/90">
      <div className="w-80 rounded bg-white p-5 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex w-20 items-center justify-evenly divide-x-2 divide-gray-100 rounded-full p-2 bg-blur">
            <FaBell className="relative inline-flex items-center px-2" style={{ color: "#c7cedb" }}>
              <span className="sr-only">Notifications</span>
              <div className="absolute -right-0 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-[7px] font-bold text-white">
                2
              </div>
            </FaBell>
            <i className="fa-solid fa-bell relative inline-flex items-center px-2" style={{ color: "#c7cedb" }}>
              <div className="absolute -right-0 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-[7px] font-bold text-white">
                5
              </div>
            </i>
          </div>
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blur text-gray-600">+</div>
        </div>
        <div className="mb-5 flex gap-4">
          <img
            className="h-20 w-20 border-spacing-1 rounded-full ring-1 ring-gray-400/90 ring-offset-2"
            src="https://picsum.photos/id/237/200/200"
            alt="img-avatar"
          />
          <div>
            <h2 className="text-sm font-bold text-violet-700">Mfwooddesign</h2>
            <p className="text-xs/5">
              Hand painted unique decorations for your home. Send us your ideas and we'll bring the to life.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-8 py-5 text-center">
          <div>
            <h4 className="text-sm text-slate-400">Likes</h4>
            <p className="font-bold text-violet-600">2,395</p>
          </div>
          <div>
            <h4 className="text-sm text-slate-400">Post Engagements</h4>
            <p className="font-bold text-violet-600">34,024</p>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 rounded bg-gray-100 px-3 py-4">
          <i className="fa-solid fa-x fa-2xs absolute right-3 top-2 my-3" style={{ color: "#d4d4d4" }} />
          <p className="mr-1 mt-2 text-[11px] text-gray-400">
            Say more about your mission and goals on your page. It may help people find it more easily.
          </p>
          <button className="mx-auto rounded-full bg-white px-4 py-2 text-xs font-semibold text-violet-500">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SMSShare;
