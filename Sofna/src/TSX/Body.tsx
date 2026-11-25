import Inputs from "./Inputs";
import Outputs from "./Outputs";
const Body = () => {
  return (
    <div className="w-[100vw] row-span-10 grid grid-rows-6 grid-cols-10">
      <Inputs></Inputs>
      <div className="col-span-4 row-span-2">Temp</div>
      <Outputs></Outputs>
    </div>
  );
};

export default Body;
