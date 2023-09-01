import { TABLIST_SELECTOR } from "../style/CSSVariables";
import { deselectElement, selectElement } from "../utils/tabListSelection";
import { displayVideos } from "./displayVideos";

const handleTabClick = (tabLink: HTMLAnchorElement, tabUrl: string) => {
  history.pushState({}, "", tabUrl);

  const tablist = document.querySelector(
    TABLIST_SELECTOR
  ) as HTMLUListElement | null;

  if (tablist) {
    const tabLinks = tablist.querySelectorAll("a");
    tabLinks.forEach((link) => deselectElement(link));
  }

  selectElement(tabLink);

  displayVideos();
};

const createFollowingTab = (tabName: string, tabUrl: string) => {
  const tabElement = document.createElement("li");
  tabElement.setAttribute("role", "presentation");
  tabElement.classList.add("InjectLayout-sc-1i43xsx-0", "ciQoHd");

  const tabLink = document.createElement("a");
  tabLink.setAttribute("data-a-target", "watch-later-tab");
  tabLink.setAttribute("role", "tab");
  tabLink.setAttribute("aria-selected", "false");
  tabLink.setAttribute("tabindex", "-1");
  tabLink.classList.add(
    "ScInteractive-sc-iekec1-0",
    "bScHqc",
    "InjectLayout-sc-1i43xsx-0",
    "bFNmby"
  );

  tabLink.style.cursor = "pointer";

  tabElement.addEventListener("click", () => {
    handleTabClick(tabLink, tabUrl);
  });

  const tabContent = document.createElement("div");
  tabContent.classList.add("Layout-sc-1xcs6mc-0", "curSYE");

  const tabTextWrapper = document.createElement("div");
  tabTextWrapper.classList.add("ScTextWrapper-sc-iekec1-1", "kzdBhB");

  const tabTitle = document.createElement("p");
  tabTitle.classList.add(
    "CoreText-sc-1txzju1-0",
    "ScTitleText-sc-d9mj2s-0",
    "bthLuv",
    "iaMqYH",
    "tw-title"
  );
  tabTitle.textContent = tabName;

  const tabActiveTabIndicator = document.createElement("div");
  tabActiveTabIndicator.classList.add("Layout-sc-1xcs6mc-0", "kJrZQz");

  tabActiveTabIndicator.innerHTML = `<div data-test-selector="ACTIVE_TAB_INDICATOR" class="ScActiveIndicator-sc-17qqzr5-1 jSIinO" style="display: none;"></div>`;

  tabTextWrapper.appendChild(tabTitle);
  tabContent.appendChild(tabTextWrapper);
  tabContent.appendChild(tabActiveTabIndicator);
  tabLink.appendChild(tabContent);
  tabElement.appendChild(tabLink);

  return tabElement;
};

export const injectWatchLaterTab = (tabList: Element) => {
  const watchLaterTab = createFollowingTab(
    "Watch later",
    "/directory/following/watch-later"
  );

  tabList.appendChild(watchLaterTab);
};
