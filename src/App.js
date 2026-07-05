import { useState } from "react";

import "./styles.css";
import UserDetails from "./components/UserDetails";
import SkillDetails from "./components/SkillDetails";
import ReviewPage from "./components/ReviewPage";

export default function App() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userDetailsError, setUserDetailsError] = useState({});
  const [skillDetails, setSkillDetails] = useState({ tech: "", education: "" });
  const [skillDetailsError, setSkillDetailsError] = useState({});
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      {step}
      {step === 1 && (
        <UserDetails
          userDetailsError={userDetailsError}
          setUserDetailsError={setUserDetailsError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <SkillDetails
          skillDetails={skillDetails}
          setSkillDetails={setSkillDetails}
          skillDetailsError={skillDetailsError}
          setSkillDetailsError={setSkillDetailsError}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <ReviewPage
          userDetails={userDetails}
          skillDetails={skillDetails}
          setStep={setStep}
        />
      )}
    </div>
  );
}
