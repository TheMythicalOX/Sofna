const InBand = () => {
  const bandButtons =
    "m-auto border rounded-md w-[85%] text-stone-300 text-center";
  return (
    <div className="flex-1 border grid grid-rows-12 text-xs">
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
          <div className={bandButtons}>HO1</div>
          <div className={bandButtons}>HO2</div>
          <div className={bandButtons}>HO3</div>
          <div className={bandButtons}>HO4</div>
          <div className={bandButtons}>VO1</div>
          <div className={bandButtons}>VO2</div>
          <div className={bandButtons}>VO3</div>
          <div className={bandButtons}>VO4</div>
          <div className={bandButtons}>Solo</div>
          <div className={bandButtons}>Mute</div>
        </div>
      </div>
    </div>
  );
};

export default InBand;
