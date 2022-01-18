import React, {createContext, useState} from "react";
import PopUp from "../components/PopUp";

export const PopUpContext = createContext();

const PopUpProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  return (
    <PopUpContext.Provider value={{setIsOpen, setType}}>
      {children}
      {isOpen && <PopUp onClose={setIsOpen} type={type} />}
    </PopUpContext.Provider>
  );
};
export default PopUpProvider;
