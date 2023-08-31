import {
  TABLIST_SELECTOR,
  VOD_SHARE_BUTTON_SELECTOR,
} from "../style/CSSVariables";
import { observeUrl } from "../utils/observeUrl";
import { deselectElement, selectCurrentTab } from "../utils/tabListSelection";
import { clearVideos, displayVideos } from "./displayVideos";
import { injectWatchLaterButton } from "./watchLaterButton";
import { injectWatchLaterTab } from "./watchLaterTab";

const handleShareButtonMutation = (shareButton: Element) => {
  const parentContainer = shareButton.closest(".fbIPLy");

  // watchlater button is already in DOM
  if (!parentContainer || parentContainer.childNodes.length > 2) return;

  injectWatchLaterButton(parentContainer);
};

const handleTabListMutation = (tabList: Element) => {
  // watchlater tab is already in DOM
  if (tabList.childNodes.length === 6) return;

  injectWatchLaterTab(tabList);
};

const handleFollowingPage = (newUrl: string) => {
  clearVideos();
  selectCurrentTab();

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
          VOD_SHARE_BUTTON_SELECTOR
        ) as HTMLButtonElement | null;
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
    handleFollowingPage(newUrl);
  }

  if (newUrl.includes(vodUrl)) {
    console.log("VOD");
    handleVODPage();
  }
};

observeUrl(onUrlChange);
