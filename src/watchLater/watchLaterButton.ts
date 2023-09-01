import { getClockSVG } from "../utils/getClockSVG";
import { saveVOD } from "./saveVOD";

export const createButtonElementFromCopy = (
  layoutToCopy: Element,
  buttonText: string,
  clickhandler: () => void
) => {
  const vodButtonLayout = layoutToCopy.cloneNode(true) as HTMLElement;

  const vodButton = vodButtonLayout.querySelector(
    "button"
  ) as HTMLButtonElement | null;
  const labelElement = vodButtonLayout.querySelector(
    '[data-a-target="tw-core-button-label-text"]'
  );

  if (!vodButton || !labelElement) {
    throw new Error("Button or label element not found");
  }

  labelElement.textContent = buttonText;
  vodButton.setAttribute("aria-label", buttonText);

  vodButton.addEventListener("click", clickhandler);

  const svgElement = getClockSVG();
  const vodButtonSVG = vodButton.querySelector("svg");

  if (vodButtonSVG) {
    vodButtonSVG.parentElement?.replaceChild(svgElement, vodButtonSVG);
  } else {
    vodButton.appendChild(svgElement);
  }

  return vodButtonLayout;
};

export const injectWatchLaterButton = (shareButton: Element) => {
  // get all the parent elements
  const shareButtonLayout =
    shareButton.parentElement?.parentElement?.parentElement?.parentElement;

  if (!shareButtonLayout) {
    throw new Error("Share button layout not found");
  }

  const buttonsContainer = shareButtonLayout.parentElement;

  if (!buttonsContainer) {
    throw new Error("Buttons container not found");
  }

  const watchLaterButtonContainer = createButtonElementFromCopy(
    shareButtonLayout,
    "Watch later",
    saveVOD
  );

  buttonsContainer.insertBefore(
    watchLaterButtonContainer,
    buttonsContainer.firstChild
  );
};
