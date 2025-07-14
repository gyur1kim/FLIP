import { useState, useRef, useCallback, useLayoutEffect } from "react";

interface ElementPosition {
  key: string;
  rect: DOMRect;
}

interface UseFLIPOptions {
  duration?: number;
  easing?: string;
}

interface UseFLIPReturn {
  isAnimating: boolean;
  executeFLIPAnimation: (onDOMUpdate: () => void) => void;
  getElementRef: (key: string) => (el: HTMLDivElement | null) => void;
}

export const useFLIP = (options: UseFLIPOptions = {}): UseFLIPReturn => {
  const { duration = 300, easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)" } = options;

  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const previousPositions = useRef<ElementPosition[]>([]);
  const domUpdateCallback = useRef<(() => void) | null>(null);

  // 각 요소의 위치를 저장하는 함수 (First)
  const saveElementPositions = useCallback(() => {
    const positions: ElementPosition[] = [];

    Object.entries(elementRefs.current).forEach(([key, element]) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        positions.push({ key, rect });
      }
    });

    previousPositions.current = positions;
  }, []);

  // useLayoutEffect로 DOM 업데이트 후(Last)
  // 화면을 그리기 전에 애니메이션 적용(Invert, Play)
  useLayoutEffect(() => {
    if (shouldAnimate) {
      // DOM 업데이트 실행 (Last)
      if (domUpdateCallback.current) {
        domUpdateCallback.current();
        domUpdateCallback.current = null;
      }

      // 다음 프레임에서 애니메이션 시작
      requestAnimationFrame(() => {
        setIsAnimating(true);

        // 각 요소에 대해 FLIP 애니메이션 적용
        Object.entries(elementRefs.current).forEach(([key, element]) => {
          if (element) {
            const previousPosition = previousPositions.current.find(pos => pos.key === key);
            if (previousPosition) {
              const currentRect = element.getBoundingClientRect();
              const deltaX = previousPosition.rect.left - currentRect.left;
              const deltaY = previousPosition.rect.top - currentRect.top;

              // Invert: 이전 위치로 이동 (화면 그리기 전에 적용)
              element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
              element.style.transition = "none";

              // Play: 다음 프레임에서 원래 위치로 애니메이션
              requestAnimationFrame(() => {
                element.style.transform = "";
                element.style.transition = `transform ${duration}ms ${easing}`;
              });
            }
          }
        });

        // 애니메이션 완료 후 상태 초기화
        setTimeout(() => {
          setIsAnimating(false);
          setShouldAnimate(false);

          Object.values(elementRefs.current).forEach(element => {
            if (element) {
              element.style.transition = "";
            }
          });
        }, duration);
      });
    }
  }, [shouldAnimate, duration, easing]);

  // FLIP 애니메이션 실행
  const executeFLIPAnimation = useCallback(
    (onDOMUpdate: () => void) => {
      // 1. First: 현재 위치 저장
      saveElementPositions();

      // 2. DOM 업데이트 콜백 저장
      domUpdateCallback.current = onDOMUpdate;

      // 3. Invert & Play: useLayoutEffect에서 처리
      setShouldAnimate(true);
    },
    [saveElementPositions]
  );

  // 요소 ref를 설정하는 헬퍼 함수 (First)
  const getElementRef = useCallback((key: string) => {
    return (el: HTMLDivElement | null) => {
      elementRefs.current[key] = el;
    };
  }, []);

  return {
    isAnimating,
    executeFLIPAnimation,
    getElementRef,
  };
};
