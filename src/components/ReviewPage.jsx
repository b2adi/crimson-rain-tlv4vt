import { useState } from "react";

const ReviewPage = ({ userDetails, skillDetails, setStep }) => {
  return (
    <>
      <h1>User Details</h1>
      <h2>Name: {userDetails.name}</h2>
      <h2>Email: {userDetails.email}</h2>
      <h2>Phone Number: {userDetails.phone}</h2>
      <br />
      <h1>Skill Details</h1>
      <h2>Tech Skills: {skillDetails.tech}</h2>
      <h2>Highest Qulaification: {skillDetails.education}</h2>
      <br />
      <button>Confirm</button>
    </>
  );
};
export default ReviewPage;
