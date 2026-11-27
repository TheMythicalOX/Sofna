import { useState } from "react";

interface BandButtonProps {
  title: string;
}

const MuteButton = ({ title }: BandButtonProps) => {
  const OnButtonClick = () => {
    if (buttonColor === "bg-stone-700") {
      setButtonColor("bg-red-700");
    } else {
      setButtonColor("bg-stone-700");
    }
  };
  const [buttonColor, setButtonColor] = useState("bg-stone-700");
  const bandButtons = `m-auto border rounded-md w-[85%] text-center text-stone-300 ${buttonColor}`;
  return (
    <button className={bandButtons} onClick={OnButtonClick}>
      Mute
    </button>
  );
};

export default MuteButton;
