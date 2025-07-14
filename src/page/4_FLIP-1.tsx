const Fourth = () => {
  return (
    <div className="slide-page">
      <h1 className="pb-[30px]">FLIP 기법이란?</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RCFQu0hK6bU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <blockquote className="flex flex-col items-center justify-center">
        <strong>Paul Lewis (Google Chrome Team)</strong>
        <br />
        <small>2015 Chrome Dev Summit에서 최초 소개</small>
      </blockquote>

      <br />
      <strong className="text-xl">"애니메이션을 뒤집어서 생각하자"</strong>
      <br />
      <p>레이아웃 변화를 transform만으로 구현하는 혁신적인 방법</p>
    </div>
  );
};

export default Fourth;
