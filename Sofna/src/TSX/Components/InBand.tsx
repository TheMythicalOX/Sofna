import BandButton from "./BandButton";
import SoloButton from "./SoloButton";
import MuteButton from "./MuteButton";
const InBand = () => {
  return (
    <div className="flex-1 border grid grid-rows-12">
      <div className="row-span-1 bg-blue-800">Title</div>
      <div className="row-span-3 bg-blue-900">Effects</div>
      <div className="row-span-8 bg-blue-950 grid grid-cols-2 items-center">
        <input
          type="range"
          min={0}
          max={127}
          className="[-webkit-appearance:slider-vertical] h-[90%] w-full m-auto"
        />
        <div className="h-[95%] bg-blue-950 grid grid-rows-10">
          <BandButton title="HO1"></BandButton>
          <BandButton title="HO2"></BandButton>
          <BandButton title="HO3"></BandButton>
          <BandButton title="HO4"></BandButton>
          <BandButton title="VO1"></BandButton>
          <BandButton title="VO2"></BandButton>
          <BandButton title="VO3"></BandButton>
          <BandButton title="VO4"></BandButton>
          <SoloButton title=""></SoloButton>
          <MuteButton title=""></MuteButton>
        </div>
      </div>
    </div>
  );
};

export default InBand;
