export const observeUrl = (onChange: (url: string) => void) => {
  let previousUrl = "";
  const observer = new MutationObserver(function () {
    if (location.href !== previousUrl) {
      onChange(location.href);
      previousUrl = location.href;
      console.log("The url has changed!");
    }
  });

  const config = { subtree: true, childList: true };

  observer.observe(document, config);
};
