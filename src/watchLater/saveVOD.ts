import { VOD_TITLE_SELECTOR } from "../utils/variables";
import { addVideo, videoData } from "./videoStorage";

export const getVodInfo = () => {
  const videoTitleElement = document.querySelector(VOD_TITLE_SELECTOR);
  const channelTitleLink = document.querySelector<HTMLAnchorElement>(
    ".metadata-layout__support a"
  );

  const channelThumbnailElement = document.querySelector<HTMLImageElement>(
    "#live-channel-stream-information img"
  );

  const categoryLink = document.querySelector<HTMLAnchorElement>(
    'a[data-a-target="video-info-game-boxart-link"]'
  );

  if (
    !videoTitleElement ||
    !channelTitleLink ||
    !channelThumbnailElement ||
    !categoryLink
  ) {
    throw new Error("Could not save video: Missing or invalid data");
  }

  const videoTitle = videoTitleElement.getAttribute("title") || "";
  const videoUrl = window.location.href;
  const channelUrl = channelTitleLink.href;

  const channelTitle = channelTitleLink.querySelector("h1");
  const channelName = channelTitle?.textContent || "";
  const channelThumbnail = channelThumbnailElement.src;

  const categoryUrl = categoryLink.href;
  const categoryNameElement = categoryLink.querySelector("p");
  const categoryName = categoryNameElement?.textContent || "Category";

  const videoInfo: videoData = {
    title: videoTitle || "",
    url: videoUrl,
    channel: {
      url: channelUrl,
      name: channelName,
      thumbnail: channelThumbnail,
    },
    category: {
      name: categoryName,
      url: categoryUrl,
    },
  };

  return videoInfo;
};

export const saveVOD = () => {
  const videoInfo = getVodInfo();

  addVideo(videoInfo);

  console.log("Video added to watch later");
};
