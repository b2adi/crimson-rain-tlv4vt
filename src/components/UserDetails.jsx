import { useState } from "react";

const UserDetails = ({
  userDetailsError,
  setUserDetailsError,
  userDetails,
  setUserDetails,
  setStep,
}) => {
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (userDetails.name.trim().length <= 3) {
      err.name = "Incorrect Name";
    }
    if (!userDetails.email.trim().includes("@")) {
      err.email = "Incorrect Email";
    }
    if (userDetails.phone.length !== 10) {
      err.phone = "Incorrect Phone Number";
    }
    setUserDetailsError(err);

    if (!Object.keys(err).length) {
      alert("Submitted");
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <div>User Details</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={userDetails.name}
          name="name"
          id="name"
          onChange={inputChangeHandler}
          required
        />{" "}
        {userDetailsError.name && (
          <span style={{ color: "red" }}>{userDetailsError.name}</span>
        )}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userDetails.email}
          onChange={inputChangeHandler}
          required
        />{" "}
        {userDetailsError.email && (
          <span styles={{ color: "red" }}>{userDetailsError.email}</span>
        )}
        <br />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          minLength={10}
          maxLength={10}
          value={userDetails.phone}
          id="phone"
          name="phone"
          onChange={inputChangeHandler}
          required
        />{" "}
        {userDetailsError.phone && (
          <span style={{ color: "red" }}>{userDetailsError.phone}</span>
        )}
        <br />
        <button type="submit">Next</button>
      </form>
    </>
  );
};
export default UserDetails;
