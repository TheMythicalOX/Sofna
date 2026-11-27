import SoloButton from "./SoloButton";
import MuteButton from "./MuteButton";
const OutBand = () => {
  const bandButtons =
    "m-auto border rounded-md w-[85%] text-stone-300 text-center";
  return (
    <div className="flex-1 border grid grid-rows-12">
      <div className="row-span-1 bg-blue-800">Title</div>
      <div className="row-span-3 bg-blue-900">Effects</div>
      <div className="row-span-8 bg-blue-950 grid grid-rows-4 items-center">
        <input
          type="range"
          min={0}
          max={127}
          className="[-webkit-appearance:slider-vertical] h-[90%] w-full m-auto row-span-3"
        />
        <div className="h-[95%] bg-blue-950 grid grid-rows-2 row-span-1">
          <SoloButton title=""></SoloButton>
          <MuteButton title=""></MuteButton>
        </div>
      </div>
    </div>
  );
};

export default OutBand;
