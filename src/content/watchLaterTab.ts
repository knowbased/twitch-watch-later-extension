import { displayVideos } from "./displayVideos";

const createWatchLaterTab = () => {
  const watchLaterTab = document.createElement("li");
  watchLaterTab.setAttribute("role", "presentation");
  watchLaterTab.classList.add("InjectLayout-sc-1i43xsx-0", "UZpUA");

  const watchLaterLink = document.createElement("a");
  watchLaterLink.setAttribute("data-a-target", "watch-later-tab");
  watchLaterLink.setAttribute("role", "tab");
  watchLaterLink.setAttribute("aria-selected", "false");
  watchLaterLink.setAttribute("tabindex", "-1");
  watchLaterLink.classList.add(
    "ScInteractive-sc-iekec1-0",
    "eGCwRl",
    "InjectLayout-sc-1i43xsx-0",
    "jCwrcb"
  );

  watchLaterTab.addEventListener("click", displayVideos);

  const watchLaterContent = document.createElement("div");
  watchLaterContent.classList.add("Layout-sc-1xcs6mc-0", "lakwgB");

  const watchLaterTextWrapper = document.createElement("div");
  watchLaterTextWrapper.classList.add("ScTextWrapper-sc-iekec1-1", "iIZLZw");

  const watchLaterTitle = document.createElement("p");
  watchLaterTitle.classList.add(
    "CoreText-sc-1txzju1-0",
    "ScTitleText-sc-d9mj2s-0",
    "jKVhlu",
    "igzOaC",
    "tw-title"
  );
  watchLaterTitle.textContent = "Watch Later";

  watchLaterTextWrapper.appendChild(watchLaterTitle);
  watchLaterContent.appendChild(watchLaterTextWrapper);
  watchLaterLink.appendChild(watchLaterContent);
  watchLaterTab.appendChild(watchLaterLink);

  return watchLaterTab;
};

export const injectWatchLaterTab = () => {
  const tabList = document.querySelector("ul[role='tablist']");

  if (!tabList) {
    console.error("Could not inject watch later tab : No tab list");
    return;
  }

  const watchLaterTab = createWatchLaterTab();

  tabList.appendChild(watchLaterTab);
};
