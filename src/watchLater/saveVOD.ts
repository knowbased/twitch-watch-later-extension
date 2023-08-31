import { VIDEO_CHANNEL_AVATAR_IMAGE_SELECTOR, VOD_TITLE_SELECTOR } from "../style/CSSVariables";
import { addVideo } from "./videoStorage";

export const saveVOD = () => {
  const videoTitleElement = document.querySelector(VOD_TITLE_SELECTOR);
  const channelTitleLink = document.querySelector<HTMLAnchorElement>(
    ".metadata-layout__support a"
  );

  const channelThumbnailElement = document.querySelector<HTMLImageElement>(
    `#live-channel-stream-information ${VIDEO_CHANNEL_AVATAR_IMAGE_SELECTOR}`
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
    console.error("Could not save video: Missing or invalid data");
    return;
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

  addVideo({
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
  });

  console.log("Video added to watch later");
};
