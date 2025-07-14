import { useRef } from "react";
import styles from "./FLIP.module.css";
import stepL from "../assets/img/step-l.png";

const Seventh = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page">
      <h1 className="pb-[100px]">Last - 변화된 위치 계산하기</h1>

      <div className="flex gap-4 w-full items-center">
        {/* 실제 동작하는 예제 */}
        <div className={styles.flipContainer}>
          <div className={`${styles.boxBorderBlue} absolute top-[80px] left-[80px]`}>
            <div ref={boxRef} className={styles.boxBlur} />
          </div>

          <div className={`${styles.boxBorderRed} absolute top-[180px] left-[420px]`}>
            <div ref={boxRef} className={styles.box} />
          </div>
        </div>

        {/* 코드 예제 */}
        <img src={stepL} alt="step-l" className="w-[700px] h-fit" />
      </div>
    </div>
  );
};

export default Seventh;
