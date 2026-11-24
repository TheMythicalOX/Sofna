const InBand = () => {
  return (
    <div className="flex-1 border min-w-[90px] grid grid-rows-12">
      <div className="row-span-1 bg-blue-800">Title</div>
      <div className="row-span-3 bg-blue-900">Effects</div>
      <div className="row-span-8 bg-blue-950 grid grid-cols-2">
        <input
          type="range"
          min={0}
          max={127}
          className="[-webkit-appearance:slider-vertical] h-[90%] w-full m-auto"
        />
        <div className="h-full bg-green-700"></div>
      </div>
    </div>
  );
};

export default InBand;
