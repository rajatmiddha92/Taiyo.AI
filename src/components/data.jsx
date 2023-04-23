import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/contactSlice";

const Data = () => {
  const jsonData = useSelector((store) => store.contact);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteContact({ id }));
  };

  const dataRender = () => {
    return (
      <div className="container m-auto grid grid-cols-3 h-96 item-center  ">
        {jsonData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex items-center  w-full justify-evenly"
            >
              <div className="  gap-1 h-40">
                <div
                  className="w-full  h-20 bg-black rounded-2xl flex mx-auto py-6  px-6  gap-3 font-semibold text-white  "
                  key={data.id}
                >
                  <h6>
                    FirstName:
                    <br />
                    {data.firstname}
                  </h6>
                  <h6>
                    LastName:
                    <br />
                    {data.lastname}
                  </h6>
                  <h6>
                    Status:
                    <br />
                    {data.status}
                  </h6>
                </div>
                <div className="w-full flex justify-between py-4 font-medium">
                  <Link to={`edit/${data.id}`}>
                    <button className="rounded-xl w-32 h-10 bg-purple-300 hover:bg-teal-300">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="rounded-xl w-32 h-10 bg-red-200 hover:bg-red-300"
                    onClick={() => handleRemove(data.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {jsonData.length ? (
        dataRender()
      ) : (
        <p className="item-center font-bold text-center text-3xl text-green-700">
          No Contact Found!! Please Click on Above Button To Add Contacts
        </p>
      )}
    </div>
  );
};

export default Data;
