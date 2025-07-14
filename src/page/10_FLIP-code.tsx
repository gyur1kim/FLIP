import flipCode from "../assets/img/flip-code.png";

const Tenth = () => {
  return (
    <div className="slide-page pb-[70px] overflow-hidden">
      <h1 className="pt-[40px]">useFlip의 전체 코드</h1>

      <div className="overflow-y-scroll">
        <img src={flipCode} alt="flip-code" className="w-[1000px] h-fit" />
      </div>
    </div>
  );
};

export default Tenth;
