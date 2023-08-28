const BUTTON_CONTAINER_CLASS = "Layout-sc-1xcs6mc-0 eVaozA";

export const createWatchLaterButtonElement = (
  buttonText: string,
  clickhandler: () => void
) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = BUTTON_CONTAINER_CLASS;

  buttonContainer.innerHTML = `
    <div class="Layout-sc-1xcs6mc-0 eVaozA">
      <div class="Layout-sc-1xcs6mc-0 crbrgc">
        <div data-test-selector="toggle-balloon-wrapper__mouse-enter-detector" style="display: inherit;">
          <div class="InjectLayout-sc-1i43xsx-0 dVOhMf">
            <button class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSecondary-sc-ocjdkq-2 ibtYyW bTKXKk" aria-label="${buttonText}">
              <div class="ScCoreButtonLabel-sc-s7h2b7-0 irroFV">
                <div class="Layout-sc-1xcs6mc-0 gzBpxy">
                  <div class="ScCoreButtonIcon-sc-ypak37-0 nHEIR tw-core-button-icon">
                    <div class="ScFigure-sc-wkgzod-0 jNDIBh tw-svg" data-a-selector="tw-core-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                  </div>
                </div>
                <div data-a-target="tw-core-button-label-text" class="Layout-sc-1xcs6mc-0 phMMp">${buttonText}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>`;

  const buttonElement = buttonContainer.querySelector("button");
  if (buttonElement) {
    buttonElement.addEventListener("click", clickhandler);
  }

  return buttonContainer;
};
