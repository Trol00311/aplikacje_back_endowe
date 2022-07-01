import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";



const initialState = {
  Name: "",
  Email: "",
  Contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { Name, Email, Contact } = state;
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/addUser", data);
    if (response.status === 200) {
      window.confirm("User added succesfuly");
    }
  };

  const updateUser = async (data, Id) => {
    console.log(Id, data)
    const response = await axios.post(`http://localhost:5000/updateUser/${Id}`, data);
    if (response.status === 200) {
      window.confirm("User updated succesfuly");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email || !Contact) {
      window.confirm("Please provide value into each input field");
    } else {
      if (!id) {
        addUser(state);
      } else {
        updateUser(state, id);
      }
      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="container">
      <div style={{ marginTop: "10px", width: "300px" }}>
        <form
          action=""
          style={{
            margin: "center",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="Name">Login:</label>
          <input
            id="Name"
            name="Name"
            placeholder="Wpisz Login"
            type="text"
            onChange={handleInputChange}
            value={Name}
          />
          <label htmlFor="Email">Hasło:</label>
          <input
            id="Email"
            name="Email"
            placeholder="Wpisz Hasło"
            class='password'
            type="password"
            onChange={handleInputChange}
            value={Email}
          />
          <label htmlFor="number">Nr telefonu:</label>
          <input
            id="Contact"
            name="Contact"
            placeholder="Wpisz nrTel"
            type="number"
            onChange={handleInputChange}
            value={Contact}
          />
          <input type="submit" value={id ? "Update" : "Add"} />
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
