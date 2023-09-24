export const observeUrl = (onChange: (url: string) => void) => {
  let previousUrl = "";
  const observer = new MutationObserver(function () {
    if (location.href !== previousUrl) {
      onChange(location.href);
      previousUrl = location.href;
    }
  });

  const config = { subtree: true, childList: true };

  observer.observe(document, config);
};
