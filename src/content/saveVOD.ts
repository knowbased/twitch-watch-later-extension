import { addVideo } from "./videos";

const VIDEO_TITLE_SELECTOR = 'h2[data-a-target="stream-title"]';

export const saveVOD = () => {
  const videoTitleElement = document.querySelector(VIDEO_TITLE_SELECTOR);
  const channelTitleLink = document.querySelector<HTMLAnchorElement>(
    ".metadata-layout__support a"
  );

  const channelThumbnailElement = document.querySelector<HTMLImageElement>(
    "#live-channel-stream-information img.InjectLayout-sc-1i43xsx-0.bEwPpb.tw-image.tw-image-avatar"
  );

  const categoryLink = document.querySelector<HTMLAnchorElement>(
    'a[data-a-target="video-info-game-boxart-link"]'
  );

  if (!videoTitleElement) {
    console.error("Could not save video : No video title");
    return;
  }

  if (!channelTitleLink) {
    console.error("Could not save video : No channel title");
    return;
  }

  if (!channelThumbnailElement) {
    console.error("Could not save video : No channel thumbnail");
    return;
  }

  if (!categoryLink) {
    console.error("Could not save video : No category link");
    return;
  }

  const videoTitle = videoTitleElement.getAttribute("title");
  const videoUrl = window.location.href;
  const channelUrl = channelTitleLink.href;

  const channelTitle = channelTitleLink.querySelector("h1");
  const channelName = channelTitle ? channelTitle.textContent : "";
  const channelThumbnail = channelThumbnailElement.src;

  const categoryUrl = categoryLink.href;
  const categoryNameElement = categoryLink.querySelector("p");
  const categoryName = categoryNameElement
    ? categoryNameElement.textContent
    : "Category";

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
