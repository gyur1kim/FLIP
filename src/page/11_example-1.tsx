import { useCallback, useState } from "react";
import { useFLIP } from "../hooks/useFLIP";
import { shuffle } from "lodash";
import styles from "./example.module.css";
import example1 from "../assets/img/example-1.png";
import Spacer from "../components/Spacer";

const FOOD = [
  { key: "pizza", name: "피자" },
  { key: "tteokbokki", name: "떡볶이" },
  { key: "gukbap", name: "국밥" },
  { key: "samgyeopsal", name: "삼겹살" },
  { key: "malaxiangguo", name: "마라샹궈" },
  { key: "sushi", name: "초밥" },
  { key: "gobchang", name: "돼지곱창당면추가" },
];

const Eleventh = () => {
  const [foods, setFoods] = useState(FOOD);
  const { getElementRef, isAnimating, executeFLIPAnimation } = useFLIP({
    duration: 600,
    easing: "ease-in-out",
  });

  const handleClickFLIP = useCallback(() => {
    if (!isAnimating) {
      executeFLIPAnimation(() => setFoods(shuffle(foods)));
    }
  }, [isAnimating, executeFLIPAnimation, foods]);

  return (
    <div className="slide-page">
      <h1 className="pb-[60px]">useFlip 예시</h1>

      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          {foods.map(food => (
            <div ref={getElementRef(food.key)} key={food.key} className={styles.foodCard}>
              {food.name}
            </div>
          ))}
          <Spacer gap={30} direction="vertical" />
          <button onClick={handleClickFLIP} disabled={isAnimating} className="orange-button ">
            섞어보자
          </button>
        </div>

        <img src={example1} alt="flip-code" className="w-[700px] h-fit" />
      </div>
    </div>
  );
};

export default Eleventh;
