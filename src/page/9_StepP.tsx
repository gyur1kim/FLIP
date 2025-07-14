import { useRef } from "react";
import styles from "./FLIP.module.css";
import stepP from "../assets/img/step-p.png";

const Ninth = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page">
      <h1 className="pb-[100px]">Play - transform을 이용해 원래 위치로 이동</h1>

      <div className="flex gap-4 w-full items-center">
        {/* 실제 동작하는 예제 */}
        <div className={styles.flipContainer}>
          <div className={`${styles.boxBorderBlue} absolute top-[80px] left-[80px]`}>
            <div ref={boxRef} className={`${styles.boxBlur} absolute top-[3px] left-[3px]`} />
            <div ref={boxRef} className={`${styles.box} ${styles.boxFlip}`} />
          </div>

          <div className={`${styles.boxBorderRed} absolute top-[180px] left-[420px]`}>
            <div ref={boxRef} className={`${styles.boxBlur} absolute top-[3px] left-[3px]`} />
          </div>
        </div>

        {/* 코드 예제 */}
        <img src={stepP} alt="step-p" className="w-[650px] h-fit" />
      </div>
    </div>
  );
};

export default Ninth;
