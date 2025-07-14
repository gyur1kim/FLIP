import StepCard from "../components/StepCard";

const Fifth = () => {
  return (
    <div className="slide-page">
      <h1 className="pb-[100px]">FLIP의 4단계</h1>

      <div className="grid grid-cols-4 gap-4 w-[1200px]">
        <StepCard
          style={{ justifyContent: "flex-start" }}
          emphasis="F"
          title="First"
          render={
            <div className="flex flex-1 items-center text-center text-sm break-keep">
              애니메이션 시작 전 요소의 위치와 크기를 기록
            </div>
          }
        />
        <StepCard
          style={{ justifyContent: "flex-start" }}
          emphasis="L"
          title="Last"
          render={
            <div className="flex flex-1 items-center text-center text-sm break-keep">
              변화 후 최종 위치를 기록
            </div>
          }
        />
        <StepCard
          style={{ justifyContent: "flex-start" }}
          emphasis="I"
          title="Invert"
          render={
            <div className="flex flex-1 items-center text-center text-sm break-keep">
              transform으로 시각적으로 시작 위치에 있는 것처럼 만들기
            </div>
          }
        />
        <StepCard
          style={{ justifyContent: "flex-start" }}
          emphasis="P"
          title="Play"
          render={
            <div className="flex flex-1 items-center text-center text-sm break-keep">
              transition 활성화 후 transform 제거
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Fifth;
