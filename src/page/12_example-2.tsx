import { useState } from "react";
import { useFLIP } from "../hooks/useFLIP";
import styles from "./example.module.css";
import example1 from "../assets/img/example-1.png";
import imgSamgyeopsal from "../assets/img/samgyeopsal.jpg";
import imgPizza from "../assets/img/pizza.png";
import imgTteokbokki from "../assets/img/tteokbokki.jpeg";
import imgGukbap from "../assets/img/gukbap.webp";
import imgMalaxiangguo from "../assets/img/malaxiangguo.jpg";
import imgSushi from "../assets/img/sushi.jpg";
import imgGobchang from "../assets/img/gobchang.png";

const FOOD = [
  { key: "pizza", name: "피자", img: imgPizza },
  { key: "tteokbokki", name: "떡볶이", img: imgTteokbokki },
  { key: "gukbap", name: "국밥", img: imgGukbap },
  { key: "samgyeopsal", name: "삼겹살", img: imgSamgyeopsal },
  { key: "malaxiangguo", name: "마라샹궈", img: imgMalaxiangguo },
  { key: "sushi", name: "초밥", img: imgSushi },
  { key: "gobchang", name: "돼지곱창당면추가", img: imgGobchang },
];

export default function ExampleDetailFLIP() {
  const [foods] = useState(FOOD);
  const [selected, setSelected] = useState<string | null>(null);
  const { getElementRef, executeFLIPAnimation, isAnimating } = useFLIP({
    duration: 700,
  });
  const { getElementRef: getImageRef, executeFLIPAnimation: executeImageFlipAnimation } = useFLIP({
    duration: 700,
  });

  // 카드 클릭 시 상세로 FLIP
  const handleCardClick = (key: string) => {
    if (!isAnimating) {
      executeFLIPAnimation(() => setSelected(key));
      executeImageFlipAnimation(() => setSelected(key));
    }
  };

  // 상세 닫기 시 FLIP
  const handleClose = () => {
    if (!isAnimating && selected) {
      executeFLIPAnimation(() => setSelected(null));
      executeImageFlipAnimation(() => setSelected(null));
    }
  };

  const selectedFood = foods.find(f => f.key === selected);

  return (
    <div className="slide-page" style={{ position: "relative" }}>
      <h1>useFLIP 예시 2</h1>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {foods.map(food => (
            <div
              key={food.key}
              ref={getElementRef(food.key)}
              className={styles.foodCardImg}
              onClick={() => handleCardClick(food.key)}
              style={{
                cursor: "pointer",
              }}
            >
              {food.name}
              <img
                ref={getImageRef(food.key)}
                src={food.img}
                alt={food.name}
                className="w-[30px] h-[30px] object-cover"
              />
            </div>
          ))}
        </div>
        <img src={example1} alt={example1} className="w-[700px] h-fit" />

        {/* 상세 뷰 */}
        {selectedFood && (
          <div className={styles.foodDetailCardDimmed} onClick={handleClose}>
            <div
              ref={getElementRef(selectedFood.key)}
              className={styles.foodDetailCard}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 24, marginBottom: 24 }}>
                {selectedFood.name}
              </div>
              <img
                ref={getImageRef(selectedFood.key)}
                src={selectedFood.img}
                alt={selectedFood.name}
                style={{ width: 200, height: 200, borderRadius: 16, objectFit: "cover" }}
              />
              <button onClick={handleClose} style={{ marginTop: 32 }}>
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
