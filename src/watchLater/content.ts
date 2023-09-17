import { TABLIST_SELECTOR } from "../style/CSSVariables";
import { observeUrl } from "../utils/observeUrl";
import {
  deselectElement,
  getCurrentTab,
  selectElement,
} from "../utils/tabListSelection";
import { clearVideos } from "./displayVideos";
import { injectWatchLaterButton } from "./watchLaterButton";
import { injectWatchLaterTab } from "./watchLaterTab";

const handleShareButtonMutation = (shareButton: Element) => {
  const watchLaterButton = document.querySelector(
    'button[aria-label="Watch later"]'
  );

  if (!watchLaterButton) injectWatchLaterButton(shareButton);
};

const handleTabListMutation = (tabList: Element) => {
  // watchlater tab is already in DOM
  if (tabList.childNodes.length === 6) return;

  injectWatchLaterTab(tabList);
};

const handleFollowingPage = () => {
  clearVideos();
  selectElement(getCurrentTab());

  const watchLaterLink = document.querySelector(
    'a[data-a-target="watch-later-tab"]'
  ) as HTMLElement;
  if (watchLaterLink) {
    deselectElement(watchLaterLink);
  }

  const tablist = document.querySelector(
    TABLIST_SELECTOR
  ) as HTMLButtonElement | null;
  if (tablist) {
    handleTabListMutation(tablist);
  }
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
  const followingUrl = "https://www.twitch.tv/directory/following";
  const vodUrl = "https://www.twitch.tv/videos";

  if (newUrl.includes(followingUrl)) {
    console.log("following");
    handleFollowingPage();
  }

  if (newUrl.includes(vodUrl)) {
    console.log("VOD");
    handleVODPage();
  }
};

observeUrl(onUrlChange);
