import { shuffle } from "lodash";
import { useState, useCallback } from "react";
import { useFLIP } from "../hooks/useFLIP";

const CONTENTS = [
  { key: "title", content: <h1 className="pb-10">FLIP 애니메이션</h1> },
  { key: "subtitle", content: <h3>부드러운 레이아웃 전환하기</h3> },
  { key: "description", content: <p className="pb-10">First, Last, Invert, Play</p> },
  { key: "author", content: <p className="pb-10">김규리</p> },
];

const First = () => {
  const [contents, setContents] = useState(CONTENTS);

  const { isAnimating, executeFLIPAnimation, getElementRef } = useFLIP({
    duration: 600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });

  const handleClickJustShuffle = () => {
    setContents(shuffle(contents));
  };

  const handleClickFLIP = useCallback(() => {
    if (!isAnimating) {
      // FLIP 애니메이션 실행 (DOM 업데이트 콜백 전달)
      executeFLIPAnimation(() => {
        setContents(prev => shuffle([...prev]));
      });
    }
  }, [isAnimating, executeFLIPAnimation]);

  return (
    <div className="slide-page">
      {contents.map(({ key, content }) => (
        <div
          key={key}
          ref={getElementRef(key)}
          className={`transition-all duration-300 ${isAnimating ? "pointer-events-none" : ""}`}
        >
          {content}
        </div>
      ))}
      <div className="flex gap-4 mt-8">
        <button className="orange-button" onClick={handleClickFLIP} disabled={isAnimating}>
          FLIP!
        </button>
        <button className="orange-button" onClick={handleClickJustShuffle} disabled={isAnimating}>
          just shuffle!
        </button>
      </div>
    </div>
  );
};

export default First;
