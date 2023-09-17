import { TABLIST_SELECTOR } from "../style/CSSVariables";
import {
  selectElement,
  deselectElement,
  getCurrentTabByUrl,
} from "../utils/tabListSelection";
import { clearVideos, displayVideos } from "./displayVideos";

const handleWatchLaterTabClick = (watchLaterTabLink: HTMLAnchorElement) => {
  const videoTabElement = document.querySelectorAll(
    "a[role='tab']"
  )[2] as HTMLAnchorElement | null;

  if (!videoTabElement) throw new Error("Could not find video tab");

  if (watchLaterTabLink.getAttribute("aria-selected") === "true") return;

  if (window.location.pathname === "/directory/following/videos") {
    selectElement(watchLaterTabLink);
    deselectElement(getCurrentTabByUrl());

    displayVideos();

    return;
  }

  videoTabElement.click();
  videoTabElement.addEventListener("click", () => {
    clearVideos();
    selectElement(getCurrentTabByUrl());
    deselectElement(watchLaterTabLink);
  });

  const videoSection = document.getElementById(
    "following-page-main-content"
  ) as HTMLElement | null;

  if (!videoSection) throw new Error("Could not find video section");

  let mutationTimeout: number | undefined = undefined;

  const timeWithoutMutations = 500;

  const observer = new MutationObserver(() => {
    clearTimeout(mutationTimeout);

    mutationTimeout = setTimeout(() => {
      displayVideos();

      selectElement(watchLaterTabLink);
      const tablist = document.querySelector(
        TABLIST_SELECTOR
      ) as HTMLUListElement | null;

      if (tablist) {
        deselectElement(getCurrentTabByUrl());
      }
      observer.disconnect();
    }, timeWithoutMutations);
  });

  observer.observe(videoSection, { childList: true, subtree: false });
};

const createFollowingTabFromCopy = (
  tabToCopy: Element,
  tabName: string,
  onClick: (tabLink: HTMLAnchorElement) => void
) => {
  const tabElement = tabToCopy.cloneNode(true) as HTMLLIElement;

  const tabLink = tabElement.querySelector("a") as HTMLAnchorElement;

  const tabContent = tabLink.querySelector("p") as HTMLParagraphElement;

  tabElement.setAttribute("data-index", "5");
  tabElement.addEventListener("click", () => {
    onClick(tabLink);
  });

  tabLink.setAttribute("data-a-target", "watch-later-tab");
  tabLink.removeAttribute("href");
  tabLink.style.cursor = "pointer";

  tabContent.textContent = tabName;

  return tabElement;
};

export const injectWatchLaterTab = (tabList: Element) => {
  const followingTabLink = tabList.querySelectorAll(
    "li a[aria-selected='false']"
  )[1];

  const followingTab = followingTabLink?.parentElement;

  if (!followingTab || !followingTabLink) {
    throw new Error("Following tab not found");
  }

  const watchLaterTab = createFollowingTabFromCopy(
    followingTab,
    "Watch later",
    handleWatchLaterTabClick
  );

  tabList.appendChild(watchLaterTab);
};
