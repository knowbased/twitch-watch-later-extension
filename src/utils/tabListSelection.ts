const TWITCH_PURPLE_COLOR = "#bf94ff";

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
    '[data-test-selector="ACTIVE_TAB_INDICATOR"]'
  ) as HTMLElement;

  if (activeTabIndicator) {
    activeTabIndicator.style.display = "block";
  }

  console.log("après", element);
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
    '[data-test-selector="ACTIVE_TAB_INDICATOR"]'
  ) as HTMLElement;

  if (activeTabIndicator) {
    activeTabIndicator.style.display = "none";
  }
};
