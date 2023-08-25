// import { getVideos } from "./videos";

const createSectionTitle = (title: string) => {
  const sectionHeader = document.createElement("header");
  sectionHeader.setAttribute("aria-label", title);

  const headerLayout = document.createElement("div");
  headerLayout.classList.add("Layout-sc-1xcs6mc-0", "hrNxVf");

  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute(
    "data-a-target",
    "followed-videos-continue-watching-header"
  );
  sectionTitle.classList.add("CoreText-sc-1txzju1-0", "dDJaVb");
  sectionTitle.textContent = title;

  headerLayout.appendChild(sectionTitle);
  sectionHeader.appendChild(headerLayout);
  return sectionHeader;
};

const clearSection = (section: HTMLElement) => {
  const children = Array.from(section.children);

  // Utilisation de forEach pour parcourir les éléments enfants et vider leur contenu
  children.forEach((child) => {
    child.innerHTML = "";
  });
};

export const displayVideos = () => {
  //   const videos = getVideos();

  const videoSection = document.getElementById("following-page-main-content");

  if (!videoSection) {
    console.error("Could display videos : No video section");
    return;
  }

  clearSection(videoSection);

  const sectionTitle = createSectionTitle("Watch later");

  const firstDiv = videoSection.querySelector("div:first-child");

  if (!firstDiv) {
    console.error("Could display videos : No div in section");
    return;
  }

  firstDiv?.appendChild(sectionTitle);

  // TODO : Ajouter les videos dans la section
};
