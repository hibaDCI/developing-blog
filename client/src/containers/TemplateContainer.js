import React, {useContext} from "react";
import Navbar from "../components/Navbar";
import {PopUpContext} from "../contexts/PopUpContext";
function TemplateContainer({children}) {
  const {setIsOpen, setType} = useContext(PopUpContext);
  const handleOnLogin = () => {
    setIsOpen(true);
    setType("LOGIN");
  };
  const handleSignUp = () => {
    setIsOpen(true);
    setType("SIGNUP");
  };
  return (
    <div>
      <Navbar onLogin={handleOnLogin} onSignUp={handleSignUp} />
      {children}
    </div>
  );
}

export default TemplateContainer;
