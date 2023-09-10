import { WATCH_LATER_CONTAINER_ID } from "../style/CSSVariables";
import { getXSVG } from "../utils/getXSVG";
import { deleteVideo, getVideos, videoData } from "./videoStorage";

const createSectionHeaderFromCopy = (headerToCopy: Element, title: string) => {
  const sectionHeader = headerToCopy.cloneNode(true) as HTMLElement;
  sectionHeader.setAttribute("aria-label", title);

  const sectionHeaderTitle = sectionHeader.querySelector("h2");

  if (!sectionHeaderTitle)
    throw new Error("Could not find section header title");

  sectionHeaderTitle.textContent = title;

  return sectionHeader;
};

const createVideoElementFromCopy = (
  videoToCopy: Element,
  videoData: videoData
) => {
  const videoElement = videoToCopy.cloneNode(true) as HTMLElement;

  const links = videoElement.querySelectorAll("a");

  const titleLink = links[0];
  const channelLink = links[1];
  const categoryLink = links[2];
  const channelAvatarLink = links[3];
  const previewCardLink = links[4];

  const channelAvatarImg = channelAvatarLink.querySelector("img");
  const previewCardImg = previewCardLink.querySelector("img");

  const deleteButton = videoElement.querySelector(
    "button[data-a-target='report-button-more-button']"
  );

  if (!deleteButton) throw new Error("Could not find delete button");

  const deleteButtonSVG = deleteButton.querySelector("svg");
  const crossSVG = getXSVG();

  if (deleteButtonSVG) {
    deleteButtonSVG.parentElement?.replaceChild(crossSVG, deleteButtonSVG);
  }

  previewCardLink!.href = videoData.url;

  // TODO : get the real thumbnail
  previewCardImg!.src =
    "https://vod-secure.twitch.tv/_404/404_processing_320x180.png";
  titleLink!.href = videoData.url;

  const title = titleLink!.querySelector("h3");
  title!.textContent = videoData.title;
  title!.title = videoData.title;

  channelLink!.href = videoData.channel.url;
  channelLink!.textContent = videoData.channel.name;

  channelAvatarLink.href = videoData.channel.url;
  channelAvatarImg!.src = videoData.channel.thumbnail;

  categoryLink!.href = videoData.category.url;
  categoryLink!.textContent = videoData.category.name;

  deleteButton?.innerHTML;
  deleteButton!.addEventListener("click", () => {
    deleteVideo(videoData.url);
    clearVideos();
    displayVideos();
  });

  return videoElement;
};

export const clearSection = (section: HTMLElement) => {
  const children = Array.from(section.children);

  children.forEach((child) => {
    const htmlChild = child as HTMLElement;
    htmlChild.style.display = "none";
  });
};

export const clearVideos = () => {
  // remove added content
  const watchLaterVideoContainer = document.getElementById(
    WATCH_LATER_CONTAINER_ID
  );

  watchLaterVideoContainer?.remove();

  const header = document.querySelector('header[aria-label="Watch later"]');
  header?.remove();

  // display the previously hidden content
  const section = document.getElementById("following-page-main-content");

  if (!section) return;

  const children = Array.from(section.children);

  children.forEach((child) => {
    const htmlChild = child as HTMLElement;
    htmlChild.style.display = "block";
  });
};

export const displayVideos = () => {
  const videoSection = document.getElementById("following-page-main-content");

  if (!videoSection) throw new Error("Could not find video section");

  const videos = getVideos();
  const videosContainer = document.querySelector(
    "#following-page-main-content > div"
  );

  if (!videosContainer) throw new Error("Could not find video container");

  const videoSectionHeader = document.querySelector(
    "#following-page-main-content header"
  ) as HTMLHeadingElement | null;

  if (!videoSectionHeader)
    throw new Error("Could not find video section header");

  const videoSectionElement = videosContainer.querySelector("div");

  if (!videoSectionElement) throw new Error("Could not find video element");

  const videosContainerCopy = videosContainer.cloneNode(true) as HTMLElement;
  videosContainerCopy.id = WATCH_LATER_CONTAINER_ID;
  videosContainerCopy.innerHTML = "";

  videos.forEach((video) => {
    const videoElement = createVideoElementFromCopy(videoSectionElement, video);
    videosContainerCopy.appendChild(videoElement);
  });

  const sectionHeader = createSectionHeaderFromCopy(
    videoSectionHeader,
    "Watch later"
  );

  clearSection(videoSection);

  videoSection.appendChild(sectionHeader);
  videoSection.appendChild(videosContainerCopy);
};
