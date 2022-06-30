import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const updateUser = { name };
    // send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("add user successfully");
        e.target.reset();
      });
  };
  return (
    <div className=" text-center mt-40">
      <h1 className="text-2xl m-5">Update User{users.name}</h1>
      <form onSubmit={handleUpdateSubmit}>
        <input
          type="text"
          placeholder="Update"
          name="name"
          class="input input-bordered w-full max-w-xs"
        />{" "}
        <br />
        <button className="btn btn-primary mt-5">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
