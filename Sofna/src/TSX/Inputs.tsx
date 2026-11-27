import InBand from "./Components/InBand";
const Inputs = () => {
  return (
    <div className="bg-stone-600 gap-1 m-1 col-span-6 row-span-6 flex">
      <InBand BandID={0}></InBand>
      <InBand BandID={1}></InBand>
      <InBand BandID={2}></InBand>
      <InBand BandID={3}></InBand>
      <InBand BandID={4}></InBand>
      <InBand BandID={5}></InBand>
      <InBand BandID={6}></InBand>
      <InBand BandID={7}></InBand>
    </div>
  );
};

export default Inputs;
