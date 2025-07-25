import React from "react";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const DarkModeToggle = () => {
  const { isDarkMode, darkModeToggle } = useDarkMode();
  return (
    <ButtonIcon onClick={darkModeToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon/>}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
