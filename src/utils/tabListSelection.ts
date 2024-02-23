import { TABLINK_SELECTOR } from "../style/CSSVariables";
import { replaceAllElementClasses } from "./replaceClasses";

export const selectElement = (element: HTMLElement) => {
  console.log("element: ", element);
  const selectedElement = document.querySelector(
    `${TABLINK_SELECTOR}[aria-selected="true"]`
  );

  if (!selectedElement || selectedElement === element) return;

  element.setAttribute("aria-selected", "true");

  replaceAllElementClasses(element, selectedElement);
};

export const deselectElement = (element: HTMLElement) => {
  const unSelectedElement = document.querySelector(
    `${TABLINK_SELECTOR}[aria-selected="false"]`
  );

  if (!unSelectedElement) {
    throw new Error("No unselected element found");
  }

  element.setAttribute("aria-selected", "false");
  replaceAllElementClasses(element, unSelectedElement);

  const elementActiveTabIndicator = element.querySelector(
    'div[data-test-selector="ACTIVE_TAB_INDICATOR"]'
  ) as HTMLElement;

  if (elementActiveTabIndicator) {
    elementActiveTabIndicator.style.display = "none";
  }
};

export const getCurrentTabByUrl = () => {
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
  }

  const tabListLinks = document.querySelectorAll(TABLINK_SELECTOR);

  return tabListLinks[tabIndex] as HTMLElement;
};
