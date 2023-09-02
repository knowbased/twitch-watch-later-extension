import { TABLIST_SELECTOR } from "../style/CSSVariables";
import { selectElement, deselectElement } from "../utils/tabListSelection";
import { displayVideos } from "./displayVideos";

const handleTabClick = (
  watchLaterTabLink: HTMLAnchorElement,
  tabUrl: string
) => {
  history.pushState({}, "", tabUrl);

  const tablist = document.querySelector(
    TABLIST_SELECTOR
  ) as HTMLUListElement | null;

  if (tablist) {
    const tabLinks = tablist.querySelectorAll("a");
    tabLinks.forEach((link) => deselectElement(link));
  }

  selectElement(watchLaterTabLink);

  displayVideos();
};

const createFollowingTabFromCopy = (
  tabToCopy: Element,
  tabName: string,
  tabUrl: string
) => {
  const tabElement = tabToCopy.cloneNode(true) as HTMLLIElement;

  const tabLink = tabElement.querySelector("a") as HTMLAnchorElement;

  const tabContent = tabLink.querySelector("p") as HTMLParagraphElement;

  tabElement.setAttribute("data-index", "5");
  tabElement.addEventListener("click", () => {
    handleTabClick(tabLink, tabUrl);
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
    "/directory/following/watch-later"
  );

  tabList.appendChild(watchLaterTab);
};
