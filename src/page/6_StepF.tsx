import { useRef } from "react";
import styles from "./FLIP.module.css";
import stepF from "../assets/img/step-f.png";

const Sixth = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="slide-page">
      <h1 className="pb-[100px]">First - 기존 위치 기억하기</h1>

      <div className="flex gap-4 w-full items-center">
        {/* 실제 동작하는 예제 */}
        <div className={styles.flipContainer}>
          <div className={`${styles.boxBorderBlue} absolute top-[80px] left-[80px]`}>
            <div ref={boxRef} className={styles.box} />
          </div>
        </div>

        {/* 코드 예제 */}
        <img src={stepF} alt="step-f" className="w-[650px] h-fit" />
      </div>
    </div>
  );
};

export default Sixth;
