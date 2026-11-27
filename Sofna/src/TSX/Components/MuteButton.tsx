import { useState } from "react";
import { useMixerStore } from "../../MixerStore";

interface BandButtonProps {
  BandID: number;
}

const MuteButton = ({ BandID }: BandButtonProps) => {
  const isMuted = useMixerStore((state) => state.inMuted[BandID]);
  const toggleMuted = useMixerStore((state) => state.toggleInMute);

  const OnButtonClick = () => {
    toggleMuted(BandID);
    if (isMuted) {
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
