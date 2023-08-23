import { saveVOD } from "./saveVOD";
import { createWatchLaterButtonElement } from "./watchLaterButton";

const SHARE_BUTTON_SELECTOR = 'button[aria-label="Partager"]';

const injectWatchLaterButton = (container: Element) => {
  const watchLaterButtonContainer = createWatchLaterButtonElement(
    "Watch later",
    saveVOD
  );

  container.insertBefore(watchLaterButtonContainer, container.firstChild);
};

const onShareButtonMutation = (shareButton: Element) => {
  const parentContainer = shareButton.closest(".fbIPLy");

  // watchlater button is already in DOM
  if (!parentContainer || parentContainer.childNodes.length > 2) return;

  injectWatchLaterButton(parentContainer);
};

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.target instanceof Element) {
      const shareButton = mutation.target.querySelector(
        SHARE_BUTTON_SELECTOR
      ) as HTMLButtonElement | null;

      if (shareButton) {
        onShareButtonMutation(shareButton);
      }
    }
  }
});

const observerConfig = { childList: true, subtree: true };

observer.observe(document.body, observerConfig);
