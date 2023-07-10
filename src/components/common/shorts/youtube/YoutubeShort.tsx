import Youtube from "react-youtube";

type YoutubeShortProps = {
  className?: string;
  videoId: string;
};

export default function YoutubeShort({
  className,
  videoId,
}: YoutubeShortProps) {
  return (
    <Youtube
      className={className}
      videoId={videoId}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1, //자동재생 O
          rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
          modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
        },
      }}
      onEnd={(e) => {
        e.target.stopVideo(0);
      }}
    />
  );
}
