import {
  ACTIVE_TAB_INDICATOR_SELECTOR,
  TABLINK_SELECTOR,
  TWITCH_PURPLE_COLOR,
} from "../style/CSSVariables";

export const selectElement = (element: HTMLElement) => {
  element.style.color = TWITCH_PURPLE_COLOR;
  element.setAttribute("aria-selected", "true");
  element.setAttribute("tabindex", "0");

  const layoutDiv = element.querySelector(".Layout-sc-1xcs6mc-0");
  if (layoutDiv) {
    layoutDiv.classList.remove("lakwgB");
    layoutDiv.classList.add("jEhsPY");
  }

  const textWrapperDiv = element.querySelector(".ScTextWrapper-sc-iekec1-1");
  if (textWrapperDiv) {
    textWrapperDiv.classList.remove("iIZLZw");
    textWrapperDiv.classList.add("kNfdem");
  }

  const activeTabIndicator = element.querySelector(
    ACTIVE_TAB_INDICATOR_SELECTOR
  ) as HTMLElement;

  if (activeTabIndicator) {
    activeTabIndicator.style.display = "block";
  }
};

export const deselectElement = (element: HTMLElement) => {
  element.style.color = "inherit";
  element.setAttribute("aria-selected", "false");
  element.setAttribute("tabindex", "-1");

  const layoutDiv = element.querySelector(".Layout-sc-1xcs6mc-0");

  if (layoutDiv) {
    layoutDiv.classList.remove("jEhsPY");
    layoutDiv.classList.add("lakwgB");
  }

  const textWrapperDiv = element.querySelector(".ScTextWrapper-sc-iekec1-1");

  if (textWrapperDiv) {
    textWrapperDiv.classList.remove("kNfdem");
    textWrapperDiv.classList.add("iIZLZw");
  }
  const activeTabIndicator = element.querySelector(
    ACTIVE_TAB_INDICATOR_SELECTOR
  ) as HTMLElement;

  if (activeTabIndicator) {
    activeTabIndicator.style.display = "none";
  }
};

export const selectCurrentTab = () => {
  const url = window.location.href;

  const urlCategory = url.split("/")[5];

  let tabIndex = 0;

  switch (urlCategory) {
    case undefined:
      tabIndex = 0;
      break;
    case "live":
      tabIndex = 1;
      break;
    case "videos":
      tabIndex = 2;
      break;
    case "games":
      tabIndex = 3;
      break;
    case "channels":
      tabIndex = 4;
      break;
    case "watch-later":
      tabIndex = 5;
      break;
  }

  const tabListLinks = document.querySelectorAll(TABLINK_SELECTOR);

  selectElement(tabListLinks[tabIndex] as HTMLElement);
};
