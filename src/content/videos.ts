type videoData = {
  title: string;
  url: string;
};

export const getVideos = (): videoData[] => {
  const storedVideos = localStorage.getItem("twitchVideosToWatchLater");
  return storedVideos ? JSON.parse(storedVideos) : [];
};

export const addVideo = (videoData: videoData) => {
  const videos = getVideos();

  videos.push(videoData);

  localStorage.setItem("twitchVideosToWatchLater", JSON.stringify(videos));
};
