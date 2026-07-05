import { useState } from "react";

const techSkills = [
  { name: "react", value: "React.js" },
  { name: "next", value: "Next.js" },
  { name: "angular", value: "Angular.js" },
];

const SkillDetails = ({
  skillDetails,
  setSkillDetails,
  skillDetailsError,
  setSkillDetailsError,
  setStep,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(skillDetails);
    let err = {};
    if (!skillDetails.tech) {
      err.tech = "Select your tech skill";
    }
    if (!skillDetails.education) {
      err.education = "Select qualification";
    }
    setSkillDetailsError(err);
    if (!Object.keys(err).length) {
      alert("Submitted");
      setStep((prev) => prev + 1);
    }
  };

  const onSelectionChange = (e) => {
    const { name, value } = e.target;
    setSkillDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2>Skill Details</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="tech">Tech Stack: </label>
        <select name="tech" id="tech" onChange={onSelectionChange}>
          <option value="" disabled>
            Select Skill
          </option>
          {techSkills.map((skill) => {
            return (
              <option key={skill?.name} value={skill?.name}>
                {skill.value}
              </option>
            );
          })}
        </select>{" "}
        {skillDetailsError.tech && (
          <span style={{ color: "red" }}>{skillDetailsError.tech}</span>
        )}
        <br />
        <label htmlFor="">Highest Qualification: </label>
        <label htmlFor="underGrad">UnderGrad</label>
        <input
          type="radio"
          name="education"
          id="underGrad"
          value="Under Grad"
          onChange={onSelectionChange}
        />
        <label htmlFor="grad">Grad</label>
        <input
          type="radio"
          name="education"
          id="grad"
          value="grad"
          onChange={onSelectionChange}
        />
        <label htmlFor="postGrad">Post Grad</label>
        <input
          type="radio"
          name="education"
          id="postGrad"
          value="post Grad"
          onChange={onSelectionChange}
        />{" "}
        {skillDetailsError.education && (
          <span style={{ color: "red" }}>{skillDetailsError.education}</span>
        )}
        <br />
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default SkillDetails;
