import { getClockSVG } from "../utils/getClockSVG";
import { getVodInfo, saveVOD } from "./saveVOD";
import { isVideoSaved } from "./videoStorage";

export const createButtonElementFromCopy = (
  layoutToCopy: Element,
  buttonText: string,
  clickhandler: (buttonElement: HTMLButtonElement) => void
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

  vodButton.addEventListener("click", () => clickhandler(vodButton));

  const svgElement = getClockSVG();
  const vodButtonSVG = vodButton.querySelector("svg");

  if (vodButtonSVG) {
    vodButtonSVG.parentElement?.replaceChild(svgElement, vodButtonSVG);
  } else {
    vodButton.appendChild(svgElement);
  }

  return vodButtonLayout;
};

const desactiveButton = (button: HTMLButtonElement) => {
  button.style.opacity = "0.5";
  button.disabled = true;
  button.style.cursor = "default";
};

const desactiveButtonIfAlreadySaved = (button: HTMLButtonElement) => {
  const { url } = getVodInfo();
  const isAlreadySaved = isVideoSaved(url);

  if (isAlreadySaved) {
    desactiveButton(button);
  }
};

const handleWatchLaterButtonClick = (watchLaterButton: HTMLButtonElement) => {
  saveVOD();

  desactiveButton(watchLaterButton);
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
    handleWatchLaterButtonClick
  );

  const watchLaterButton = watchLaterButtonContainer.querySelector(
    "button"
  ) as HTMLButtonElement;

  desactiveButtonIfAlreadySaved(watchLaterButton);

  buttonsContainer.insertBefore(
    watchLaterButtonContainer,
    buttonsContainer.firstChild
  );
};
