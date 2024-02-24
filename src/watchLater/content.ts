import { observeUrl } from "../utils/observeUrl";
import { clearVideos, displayVideos } from "./displayVideos";
import { injectWatchLaterButton } from "./watchLaterButton";

const handleShareButtonMutation = (shareButton: Element) => {
  const watchLaterButton = document.querySelector(
    'button[aria-label="Watch later"]'
  );

  if (!watchLaterButton) injectWatchLaterButton(shareButton);
};

const handleVODPage = () => {
  const observerConfig = { childList: true, subtree: true };
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.target instanceof Element) {
        const shareButton = mutation.target.querySelector(
          "#live-channel-stream-information .metadata-layout__split-top button"
        );

        if (shareButton) {
          handleShareButtonMutation(shareButton);
        }
      }
    });
  });

  observer.observe(document.body, observerConfig);
};

const onUrlChange = (newUrl: string) => {
  const videoSectionUrl = "https://www.twitch.tv/directory/following/videos";
  const vodUrl = "https://www.twitch.tv/videos";

  if (newUrl.includes(videoSectionUrl)) {
    setTimeout(() => {
      displayVideos();
    }, 1000);
  } else {
    clearVideos();
  }

  if (newUrl.includes(vodUrl)) {
    handleVODPage();
  }
};

observeUrl(onUrlChange);
