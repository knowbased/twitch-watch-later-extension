const VIDEO_TITLE_SELECTOR = 'h2[data-a-target="stream-title"]';

type videoData = {
  title: string;
  url: string;
};

export const saveVOD = () => {
  const videoTitleElement = document.querySelector(VIDEO_TITLE_SELECTOR);

  if (!videoTitleElement) {
    console.error("Could not save video : No video title");
    return;
  }

  const videoTitle = videoTitleElement.getAttribute("title");
  const videoUrl = window.location.href;

  const videoData: videoData = {
    title: videoTitle || "",
    url: videoUrl,
  };

  const storedVideos = localStorage.getItem("twitchVideosToWatchLater");
  const videosToWatchLater: videoData[] = storedVideos
    ? JSON.parse(storedVideos)
    : [];

  videosToWatchLater.push(videoData);

  localStorage.setItem(
    "twitchVideosToWatchLater",
    JSON.stringify(videosToWatchLater)
  );

  console.log("Video added to watch later");
};
