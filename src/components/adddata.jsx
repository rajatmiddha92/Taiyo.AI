import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const inputData = {
  firstname: "",
  lastname: "",
  status: "",
};

const AddData = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(inputData);

  const handleChange = ({ target: { name, value } }) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(
      addContact({
        id: uuidv4(),
        firstname: inputValue.firstname,
        lastname: inputValue.lastname,
        status: inputValue.status,
      })
    );
    setInputValue(inputData);
    props.setshow(false);
  };

  return (
    <div className="w-2/4 h-96 bg-green-200 mx-auto pt-5 rounded-2xl text-center text-2xl font-semibold">
      Create Contact Screen
      <div className="flex mx-auto my-10 justify-center gap-3 text-xl font-semibold ">
        <h5>First Name :</h5>
        <span>
          <input
            type="text"
            name="firstname"
            value={inputValue.firstname}
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
            value={inputValue.lastname}
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
        className="w-32 h-10 bg-green-600 flex  text-lg justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-green-800
                hover:font-semibold"
      >
        <button onClick={handleSubmit}>Save Contact</button>
      </div>
    </div>
  );
};

export default AddData;
