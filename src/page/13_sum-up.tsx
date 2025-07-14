import React from "react";
import StepCard from "../components/StepCard";

const Thirteenth = () => {
  return (
    <div className="slide-page">
      <h1 className="pb-[60px]">주의사항</h1>
      <div className="grid grid-cols-3 gap-4 w-[900px] h-[400px] pb-[200px]">
        <StepCard
          title="⏱️ 100ms 룰"
          render={
            <div className="flex items-center text-center text-sm break-keep">
              사용자 상호작용 후 100ms 내에 계산 완료
            </div>
          }
        />
        <StepCard
          title="🚫 충돌 방지"
          render={
            <div className="flex items-center text-center text-sm break-keep">
              여러 FLIP 애니메이션이 동시에 실행되지 않도록 주의
            </div>
          }
        />
        <StepCard
          title="🖼️ 왜곡 주의"
          render={
            <div className="flex items-center text-center text-sm break-keep">
              scale 변환 시 텍스트나 이미지 왜곡 가능
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Thirteenth;
