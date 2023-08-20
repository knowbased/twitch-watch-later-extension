const onShareButtonAdded = (shareButton: HTMLButtonElement) => {
  const buttonText = "Later";

  const watchLaterButtonContainer = document.createElement("div");
  watchLaterButtonContainer.className = "Layout-sc-1xcs6mc-0 eVaozA";

  watchLaterButtonContainer.innerHTML = `
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

  const buttonElement = watchLaterButtonContainer.querySelector("button");

  const shareButtonContainer = shareButton.closest(".eVaozA");
  const parentContainer = shareButton.closest(".fbIPLy");

  if (parentContainer) {
    parentContainer.appendChild(watchLaterButtonContainer);
    parentContainer.insertBefore(
      watchLaterButtonContainer,
      shareButtonContainer
    );

    buttonElement?.addEventListener("click", () => {
      console.log("Ajouter à regarder plus tard");
    });
  }
};

// Observer pour les mutations dans le DOM
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.target instanceof Element) {
      const shareButton = mutation.target.querySelector(
        'button[aria-label="Partager"]'
      ) as HTMLButtonElement | null;

      if (shareButton) {
        observer.disconnect();
        onShareButtonAdded(shareButton);
        break;
      }
    }
  }
});

const observerConfig = { childList: true, subtree: true };

observer.observe(document.body, observerConfig);
