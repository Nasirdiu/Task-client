import React from "react";

const ToDo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const user = { name };
    fetch("https://cryptic-anchorage-67641.herokuapp.com/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("add user successfully");
        event.target.reset();
      });
  };
  return (
    <div className="text-center mt-40">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TODO"
          name="name"
          class="input input-bordered w-full max-w-xs"
        />{" "}
        <br />
        <button className="btn btn-primary mt-5">Submit</button>
      </form>
    </div>
  );
};

export default ToDo;
