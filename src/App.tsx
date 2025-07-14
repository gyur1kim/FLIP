import { useState } from "react";
import { Eighth, Fifth, First, Fourth, Ninth, Second, Seventh, Sixth, Third } from "./page";

function App() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {page === 1 && <First />}
      {page === 2 && <Second />}
      {page === 3 && <Third />}
      {page === 4 && <Fourth />}
      {page === 5 && <Fifth />}
      {page === 6 && <Sixth />}
      {page === 7 && <Seventh />}
      {page === 8 && <Eighth />}
      {page === 9 && <Ninth />}

      {/* 버튼 */}
      <div className="flex justify-between w-full absolute bottom-[30px]  px-[50px]">
        <button onClick={handlePrev} disabled={page === 1}>
          ◀ 이전
        </button>
        <button onClick={handleNext} disabled={page === 9}>
          다음 ▶
        </button>
      </div>
    </div>
  );
}

export default App;
