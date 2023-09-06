import { TABLIST_SELECTOR } from "../style/CSSVariables";
import {
  selectElement,
  deselectElement,
  getCurrentTab,
} from "../utils/tabListSelection";
import { clearVideos, displayVideos } from "./displayVideos";

const handleTabClick = (watchLaterTabLink: HTMLAnchorElement) => {
  const videoTabElement = document.querySelectorAll(
    "a[role='tab']"
  )[2] as HTMLAnchorElement | null;

  if (!videoTabElement) throw new Error("Could not find video tab");

  videoTabElement.click();
  videoTabElement.addEventListener("click", () => {
    clearVideos();
    selectElement(getCurrentTab());
    deselectElement(watchLaterTabLink);
  });

  setTimeout(() => {
    displayVideos();

    selectElement(watchLaterTabLink);
    const tablist = document.querySelector(
      TABLIST_SELECTOR
    ) as HTMLUListElement | null;

    if (tablist) {
      deselectElement(getCurrentTab());
    }
  }, 2000);
};

const createFollowingTabFromCopy = (tabToCopy: Element, tabName: string) => {
  const tabElement = tabToCopy.cloneNode(true) as HTMLLIElement;

  const tabLink = tabElement.querySelector("a") as HTMLAnchorElement;

  const tabContent = tabLink.querySelector("p") as HTMLParagraphElement;

  tabElement.setAttribute("data-index", "5");
  tabElement.addEventListener("click", () => {
    handleTabClick(tabLink);
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

  const watchLaterTab = createFollowingTabFromCopy(followingTab, "Watch later");

  tabList.appendChild(watchLaterTab);
};
