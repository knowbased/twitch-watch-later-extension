export type videoData = {
  title: string;
  url: string;
  channel: {
    name: string | null;
    url: string;
    thumbnail: string;
  };
  category: {
    name: string | null;
    url: string;
  };
};

export const getVideos = (): videoData[] => {
  const storedVideos = localStorage.getItem("twitchVideosToWatchLater");
  return storedVideos ? JSON.parse(storedVideos) : [];
};

export const addVideo = (videoData: videoData) => {
  const videos = getVideos();

  const videoExists = videos.some((video) => video.url === videoData.url);

  if (videoExists) return;

  videos.push(videoData);

  localStorage.setItem("twitchVideosToWatchLater", JSON.stringify(videos));
};

export const deleteVideo = (videoUrl: string) => {
  const videos = getVideos();

  const updatedVideos = videos.filter((video) => video.url !== videoUrl);

  localStorage.setItem(
    "twitchVideosToWatchLater",
    JSON.stringify(updatedVideos)
  );
};

export const isVideoSaved = (videoUrl: string) => {
  const videos = getVideos();

  const videoExists = videos.some((video) => video.url === videoUrl);

  return videoExists;
};
