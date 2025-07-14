import newsAppSurvey from "../assets/img/news-app-survey.png";
import StepCard from "../components/StepCard";

//       여기는 자연스러운 애니메이션이 얼마나 중요한지 말하는 페이지입니다.
const Second = () => {
  return (
    <div className="slide-page">
      <h1>사람들은 뉴스 앱에서 무엇을 원할까?</h1>
      <p className="pb-[20px]">
        Paul Kinlan이 뉴스 앱 사용자들을 대상으로 어떤 기능을 원하는지 인터뷰 진행
      </p>
      <div className="flex gap-4 pb-[10px]">
        <StepCard
          style={{ width: "50%" }}
          theme="warning"
          title="🤔 예측"
          render={
            <ul className="text-sm">
              <li>새로운 콘텐츠 알림</li>
              <li>오프라인에서 사용 가능한 뉴스</li>
              <li>홈스크린 아이콘</li>
            </ul>
          }
        />
        <StepCard
          style={{ width: "50%" }}
          theme="success"
          title="🤩 실제"
          render={
            <ul className="text-sm">
              <li>
                읽기 경험에서의 <br />
                <strong>속도와 부드러움(smooth navigation)</strong>
              </li>
              <li>
                특히<strong>빠른 성능</strong>과 아침에 뉴스를 바로 사용할 수 있는{" "}
                <strong>기본적인 경험</strong>
              </li>
            </ul>
          }
        />
      </div>

      <blockquote className="pb-[10px]">
        사용자들이 실제로 원하는 것은 화려한 기능이 아니라{" "}
        <strong>신속하고 매끄러운 일상적인 사용 경험</strong>이다!
        <br />
        개발자들은 복잡한 새 기능을 추가하기보다는{" "}
        <strong>웹에서 빠르고 부드러운 기본 경험을 구축</strong>하는 것에 우선순위를 둬야 한다!
      </blockquote>

      <img className="h-[350px] pb-[10px]" src={newsAppSurvey} alt="News App Survey Results" />
      <small>출처 : https://paul.kinlan.me/what-news-readers-want/</small>
    </div>
  );
};

export default Second;
