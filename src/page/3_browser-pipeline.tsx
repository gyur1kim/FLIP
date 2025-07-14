import StepCard from "../components/StepCard";

const Third = () => {
  return (
    <div className="slide-page">
      <h1 className="pb-[40px]">브라우저 렌더링 파이프라인</h1>
      <div className="grid grid-cols-3 gap-4 pb-[40px]">
        <StepCard emphasis={"1"} title="Layout" description="요소들의 위치와 크기 계산" />
        <StepCard emphasis={"2"} title="Paint" description="픽셀 채우기" />
        <StepCard emphasis={"3"} title="Composite" description="레이어 합성" />
      </div>
      <p className="pb-[40px]">
        어떤 CSS 속성을 변경하느냐에 따라 <strong>성능이 크게 달라집니다</strong>
      </p>
      <div className="grid grid-cols-3 gap-4 pb-[40px]">
        <StepCard
          theme="warning"
          title="🐌 느림"
          description="height, width, top, left 같은 속성"
          render={
            <span>
              <small>Layout → Paint → Composite</small>
            </span>
          }
        />
        <StepCard
          theme="normal"
          title="🏃‍➡️ 보통"
          description="background-color, color 같은 속성"
          render={
            <span>
              <small>Paint → Composite</small>
            </span>
          }
        />
        <StepCard
          theme="success"
          title="🚀 빠름"
          description="transform, opacity 같은 속성"
          render={
            <span>
              <small>Composite만!</small>
            </span>
          }
        />
      </div>

      <p className="pb-[20px]">
        60fps 애니메이션을 위해서는 <strong>transform과 opacity만 사용</strong>해야함
      </p>
      <p className="pb-[40px]">
        하지만 우리는 레이아웃 변화 (리스트 아이템의 순서 변경, 카드의 확장/축소, 그리드 레이아웃
        변화 등등) 를 애니메이션으로 표현해야 하는데....?
      </p>
      <h3>
        이런 딜레마를 해결해주는 것이 바로 <strong>FLIP</strong> 기법!
      </h3>
    </div>
  );
};

export default Third;
