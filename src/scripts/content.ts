const SHARE_BUTTON_SELECTOR = 'button[aria-label="Partager"]';

const handleWatchLaterButtonClick = () => {
  console.log("Ajouter à regarder plus tard");
};

const createWatchLaterButtonElement = (buttonText: string) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "Layout-sc-1xcs6mc-0 eVaozA";

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
                    <svg width="100%" height="100%" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 16v-3h2v3h12v-3h2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm13-9-1.5 1.5L11 6v7H9V6L6.5 8.5 5 7l5-5 5 5z"></path>
                    </svg>
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
    buttonElement.addEventListener("click", handleWatchLaterButtonClick);
  }

  return buttonContainer;
};

const injectWatchLaterButton = () => {
  const shareButton = document.querySelector(SHARE_BUTTON_SELECTOR);
  if (!shareButton) return;

  if (!shareButton) return;

  const watchLaterButtonContainer =
    createWatchLaterButtonElement("Watch later");

  const shareButtonContainer = shareButton.closest(".eVaozA");
  const parentContainer = shareButton.closest(".fbIPLy");

  if (parentContainer && parentContainer.childNodes.length < 3) {
    parentContainer.appendChild(watchLaterButtonContainer);
    parentContainer.insertBefore(
      watchLaterButtonContainer,
      shareButtonContainer
    );
  }
};

// Observer pour les mutations dans le DOM
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.target instanceof Element) {
      const shareButton = mutation.target.querySelector(
        SHARE_BUTTON_SELECTOR
      ) as HTMLButtonElement | null;

      if (shareButton) {
        injectWatchLaterButton();
        break;
      }
    }
  }
});

const observerConfig = { childList: true, subtree: true };

observer.observe(document.body, observerConfig);
