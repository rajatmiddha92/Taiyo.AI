import React, { useState } from "react";
import Sidebar from "./sidebar";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../redux/contactSlice";

const EditData = () => {
  const params = useParams();
  const jsonData = useSelector((store) => store.contact);
  const dispatch = useDispatch();
  const history = useHistory();
  const existingContact = jsonData.filter(
    (contact) => contact.id === params.id
  );
  const { firstname, lastname, status } = existingContact[0];
  const [editValue, setEditValue] = useState({
    firstname: firstname,
    lastname: lastname,
    status: status,
  });

  const handleChange = ({ target: { name, value } }) => {
    setEditValue({ ...editValue, [name]: value });
  };

  const handleEdit = () => {
    dispatch(
      editContact({
        id: params.id,
        firstname: editValue.firstname,
        lastname: editValue.lastname,
        status: editValue.status,
      })
    );
    history.push("/");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto w-screen bg-green-400 h-20 ">
        <div className="w-full h-20 bg-slate-00 text-white font-bold text-center text-3xl mx-auto ">
          <h6 className="flex w-full mx-auto my-auto py-5 justify-center align-middle hover:text-white cursor-pointer">
            Edit Contacts
          </h6>
        </div>
        <div className=" w-2/4 h-96 pt-5  bg-green-200 rounded-2xl mx-auto text-center text-2xl font-semibold my-10">
          EDIT CONTACT SCREEN
          <br />
          <div className="flex mx-auto my-10 justify-center gap-3 text-xl font-semibold ">
            <h5>First Name :</h5>
            <span>
              <input
                type="text"
                name="firstname"
                value={editValue.firstname}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-60 h-10 pl-2 mx-auto text-base my-auto text-gray-700  focus:outline-none focus:shadow-outline"
              />
            </span>
          </div>
          <div className="flex mx-auto my-10 justify-center gap-3 text-xl font-semibold ">
            <h5>Last Name :</h5>
            <span>
              <input
                type="text"
                name="lastname"
                value={editValue.lastname}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-60  h-10 pl-2 mx-auto my-auto text-base focus:outline-none focus:shadow-outline"
              />
            </span>
          </div>
          <div className="flex mx-auto my-10 justify-center gap-3 text-xl font-semibold ">
            <h5>Status :</h5>
            <input
              type="radio"
              name="status"
              value="active"
              onChange={handleChange}
            />
            Active
            <input
              type="radio"
              name="status"
              value="inactive"
              onChange={handleChange}
            />
            Inactive
          </div>
          <div
            className="  w-48 h-10 bg-green-600 flex  text-lg justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-green-800 
                hover:font-semibold"
          >
            <button onClick={handleEdit}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditData;
