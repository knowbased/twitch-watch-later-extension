const BUTTON_CONTAINER_CLASS = "Layout-sc-1xcs6mc-0 eVaozA";

import { getClockSVG } from "../utils/getClockSVG";
import { saveVOD } from "./saveVOD";

export const createVODButtonElement = (
  buttonText: string,
  clickhandler: () => void
): HTMLElement => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = BUTTON_CONTAINER_CLASS;

  const buttonLayout = document.createElement("div");
  buttonLayout.className = "Layout-sc-1xcs6mc-0 crbrgc";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.dataset.testSelector =
    "toggle-balloon-wrapper__mouse-enter-detector";
  buttonWrapper.style.display = "inherit";

  const injectLayout = document.createElement("div");
  injectLayout.className = "InjectLayout-sc-1i43xsx-0 dVOhMf";

  const button = document.createElement("button");
  button.className =
    "ScCoreButton-sc-ocjdkq-0 ScCoreButtonSecondary-sc-ocjdkq-2 ibtYyW bTKXKk";
  button.setAttribute("aria-label", buttonText);

  const buttonLabel = document.createElement("div");
  buttonLabel.className = "ScCoreButtonLabel-sc-s7h2b7-0 irroFV";

  const layoutDiv = document.createElement("div");
  layoutDiv.className = "Layout-sc-1xcs6mc-0 gzBpxy";

  const buttonIcon = document.createElement("div");
  buttonIcon.className =
    "ScCoreButtonIcon-sc-ypak37-0 nHEIR tw-core-button-icon";

  const svgElement = getClockSVG();

  buttonIcon.appendChild(svgElement);
  layoutDiv.appendChild(buttonIcon);
  buttonLabel.appendChild(layoutDiv);
  buttonLabel.appendChild(document.createTextNode(buttonText));
  button.appendChild(buttonLabel);
  injectLayout.appendChild(button);
  buttonWrapper.appendChild(injectLayout);
  buttonWrapper.appendChild(button);
  buttonLayout.appendChild(buttonWrapper);
  buttonContainer.appendChild(buttonLayout);

  button.addEventListener("click", clickhandler);

  return buttonContainer;
};

export const injectWatchLaterButton = (container: Element) => {
  const watchLaterButtonContainer = createVODButtonElement(
    "Watch later",
    saveVOD
  );

  container.insertBefore(watchLaterButtonContainer, container.firstChild);
};
