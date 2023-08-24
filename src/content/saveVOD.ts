import { addVideo } from "./videos";

const VIDEO_TITLE_SELECTOR = 'h2[data-a-target="stream-title"]';

export const saveVOD = () => {
  const videoTitleElement = document.querySelector(VIDEO_TITLE_SELECTOR);

  if (!videoTitleElement) {
    console.error("Could not save video : No video title");
    return;
  }

  const videoTitle = videoTitleElement.getAttribute("title");
  const videoUrl = window.location.href;

  addVideo({
    title: videoTitle || "",
    url: videoUrl,
  });

  console.log("Video added to watch later");
};
