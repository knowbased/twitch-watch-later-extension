import { observeUrl } from "../utils/observeUrl";
import { deselectElement } from "../utils/tabListSelection";
import { clearVideos, displayVideos } from "./displayVideos";
import { saveVOD } from "./saveVOD";
import { createWatchLaterButtonElement } from "./watchLaterButton";
import { injectWatchLaterTab } from "./watchLaterTab";

const SHARE_BUTTON_SELECTOR = 'button[aria-label="Partager"]';

const injectWatchLaterButton = (container: Element) => {
  const watchLaterButtonContainer = createWatchLaterButtonElement(
    "Watch later",
    saveVOD
  );

  container.insertBefore(watchLaterButtonContainer, container.firstChild);
};

const onShareButtonMutation = (shareButton: Element) => {
  const parentContainer = shareButton.closest(".fbIPLy");

  // watchlater button is already in DOM
  if (!parentContainer || parentContainer.childNodes.length > 2) return;

  injectWatchLaterButton(parentContainer);
};

const onTabListMutation = (tabList: Element) => {
  // watchlater tab is already in DOM
  if (tabList.childNodes.length === 6) return;

  injectWatchLaterTab(tabList);
};

const onUrlChange = (newUrl: string) => {
  const followingUrl = "https://www.twitch.tv/directory/following";
  const vodUrl = "https://www.twitch.tv/videos";

  if (newUrl.includes(followingUrl)) {
    console.log("following");

    clearVideos();

    if (newUrl.includes("watch-later")) {
      displayVideos();
    } else {
      const watchLaterLink = document.querySelector(
        'a[data-a-target="watch-later-tab"]'
      ) as HTMLElement;

      if (watchLaterLink) {
        deselectElement(watchLaterLink);
      }
    }

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.target instanceof Element) {
          const tablist = mutation.target.querySelector(
            "ul[role='tablist']"
          ) as HTMLButtonElement | null;

          if (tablist) {
            onTabListMutation(tablist);
            observer.disconnect();
          }
        }
      }
    });

    const observerConfig = { childList: true, subtree: true };

    observer.observe(document.body, observerConfig);
  }

  if (newUrl.includes(vodUrl)) {
    console.log("VOD");

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.target instanceof Element) {
          const shareButton = mutation.target.querySelector(
            SHARE_BUTTON_SELECTOR
          ) as HTMLButtonElement | null;

          if (shareButton) {
            onShareButtonMutation(shareButton);
          }
        }
      }
    });

    const observerConfig = { childList: true, subtree: true };

    observer.observe(document.body, observerConfig);
  }
};

observeUrl(onUrlChange);
