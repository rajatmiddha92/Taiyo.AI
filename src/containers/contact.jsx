import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import AddData from "../components/adddata";
import Data from "../components/data";

const Contacts = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto w-screen bg-green-500 h-20 ">
        <div className="w-full mt-5 h-20 bg-slate-00 text-white font-bold text-center text-3xl mx-auto ">
          <h6 className="flex mx-auto my-auto justify-center align-middle hover:text-white cursor-pointer">
            Contact Page
          </h6>
        </div>

        <div
          className="w-80 h-10 bg-green-400 flex justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-green-300 
                hover:font-semibold"
        >
          <button
            className="rounded-xl text-xl"
            onClick={() => setShow((pre) => !pre)}
          >
            Create Contact
          </button>
        </div>
        {show === false ? <Data /> : <AddData setshow={setShow} />}
      </div>
    </div>
  );
};

export default Contacts;
