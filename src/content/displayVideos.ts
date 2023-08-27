import { getVideos, videoData } from "./videos";

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

const createVideoElement = (videoData: videoData) => {
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("Layout-sc-1xcs6mc-0", "iPAXTU");

  videoContainer.innerHTML = `<div>
	<article data-a-target="followed-vod-0" class="Layout-sc-1xcs6mc-0 guHXLE">
		<div class="Layout-sc-1xcs6mc-0 gUnRUD">
			<div class="Layout-sc-1xcs6mc-0 ilDsKw">
				<div class="ScTextWrapper-sc-10mto54-1 fwZpSK">
					<div class="ScTextMargin-sc-10mto54-2 bcdHdk">
						<div class="Layout-sc-1xcs6mc-0 idlTrs">
							<a data-focusable="true" lines="1" class="ScCoreLink-sc-16kq0mq-0 eYjhIv ScCoreLink-sc-bhsr9c-0 jYyMcQ tw-link" href="/videos/1908011335"><h3 title="Gamers8 featuring Rocket League — Day 2 — Group Stage — Stream B" class="CoreText-sc-1txzju1-0 dlDlel">Gamers8 featuring Rocket League — Day 2 — Group Stage — Stream B</h3></a>
						</div>
					</div>
					<div class="ScTextMargin-sc-10mto54-2 bcdHdk">
						<p class="CoreText-sc-1txzju1-0 jiepBC">
							<a data-test-selector="ChannelLink" data-a-target="preview-card-channel-link" class="ScCoreLink-sc-16kq0mq-0 eYjhIv tw-link" href="/gamers8gg_b">Gamers8GG_b</a>
						</p>
						<p class="CoreText-sc-1txzju1-0 jiepBC">
							<a data-test-selector="GameLink" data-a-target="preview-card-game-link" class="ScCoreLink-sc-16kq0mq-0 eYjhIv tw-link" href="/directory/game/Rocket%20League">Rocket League</a>
						</p>
					</div>
				</div>
				<div class="ScImageWrapper-sc-10mto54-0 jrfBpi">
					<a data-a-target="followed-vod-0" data-test-selector="preview-card-avatar" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 jSrrlW tw-link" href="/gamers8gg_b">
						<div class="ScAspectRatio-sc-18km980-1 gxJZAm tw-aspect">
							<div class="ScAspectSpacer-sc-18km980-0 kiiGFY"></div>
							<div class="ScAvatar-sc-144b42z-0 jBfrnP tw-avatar">
								<img class="InjectLayout-sc-1i43xsx-0 bEwPpb tw-image tw-image-avatar" alt="Gamers8GG_b" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0eb8cbcd-8b0b-4842-924e-8f19b2500b55-profile_image-50x50.png">
							</div>
						</div>
					</a>
				</div>
				<div class="Layout-sc-1xcs6mc-0 llNaON">
					<button class="ScCoreButton-sc-ocjdkq-0 hUGgcQ ScButtonIcon-sc-9yap0r-0 hsbCAn" aria-label="Plus d'options" title="Plus d'options" data-a-target="report-button-more-button">
						<div class="ButtonIconFigure-sc-1emm8lf-0 kWtJXE">
							<div class="ScFigure-sc-wkgzod-0 jNDIBh tw-svg">
								<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
									<path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
		<div class="Layout-sc-1xcs6mc-0 bZVrjx">
			<div class="ScWrapper-sc-1wvuch4-0 dSyPJh tw-hover-accent-effect">
				<div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerTop-sc-1wvuch4-2 gEBqEV hPOElK"></div>
				<div class="ScTransformWrapper-sc-1wvuch4-1 ScCornerBottom-sc-1wvuch4-3 fNwmtl dTxLuP"></div>
				<div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeLeft-sc-1wvuch4-4 jhgGdR blwnUh"></div>
				<div class="ScTransformWrapper-sc-1wvuch4-1 ScEdgeBottom-sc-1wvuch4-5 dJYDVl dWkueR"></div>
				<div class="ScTransformWrapper-sc-1wvuch4-1 gMwbGx">
					<a data-a-target="preview-card-image-link" tabindex="-1" class="ScCoreLink-sc-16kq0mq-0 jSrrlW tw-link" href="/videos/1908011335">
						<div class="Layout-sc-1xcs6mc-0 hkwQCo">
							<div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect">
								<div class="ScAspectSpacer-sc-18km980-0 ftHEOL"></div>
								<div>
									<div class="Layout-sc-1xcs6mc-0 kznuRn">
										<div class="ScAspectRatio-sc-18km980-1 hTTohL tw-aspect">
											<div class="ScAspectSpacer-sc-18km980-0 ftHEOL"></div>
											<div class="preview-card-thumbnail__image">
												<img alt="Gamers8 featuring Rocket League — Day 2 — Group Stage — Stream B" title="25 août 2023" data-test-selector="preview-card-thumbnail__image-selector" class="tw-image" src="https://vod-secure.twitch.tv/_404/404_processing_320x180.png">
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="ScPositionOver-sc-1shjvnv-0 itJKHI">
								<div class="Layout-sc-1xcs6mc-0 blKZrX video-media-card__progress-bar-wrapper">
									<div class="ScProgressBarWrapper-sc-1aarjxm-0 ihLNmB InjectLayout-sc-1i43xsx-0 lbthoL tw-progress-bar" role="progressbar" aria-valuenow="82.92555465817854" aria-valuemin="0" aria-valuemax="100">
										<div value="82.92555465817854" data-a-target="tw-progress-bar-animation" class="ScProgressBarFill-sc-1aarjxm-1 ixZTCx InjectLayout-sc-1i43xsx-0 gCUKXF"></div>
									</div>
								</div>
							</div>
							<div class="ScPositionCorner-sc-1shjvnv-1 hoKYhE">
								<div class="ScMediaCardStatWrapper-sc-anph5i-0 eBmJxH tw-media-card-stat">
									5:50:49
								</div>
							</div>
							<div class="ScPositionCorner-sc-1shjvnv-1 gUtzBI">
								<div class="ScMediaCardStatWrapper-sc-anph5i-0 eBmJxH tw-media-card-stat">
									979&nbsp;vues
								</div>
							</div>
							<div class="ScPositionCorner-sc-1shjvnv-1 kBbWhP">
								<div class="ScMediaCardStatWrapper-sc-anph5i-0 eBmJxH tw-media-card-stat">
									il y a 6 heures
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</article>
</div>`;

  const titleLink = videoContainer.querySelector<HTMLAnchorElement>(
    "a.ScCoreLink-sc-16kq0mq-0.eYjhIv.ScCoreLink-sc-bhsr9c-0.jYyMcQ.tw-link"
  );

  const previewCardLink = videoContainer.querySelector<HTMLAnchorElement>(
    'a[data-a-target="preview-card-image-link"]'
  );

  previewCardLink!.href = videoData.url;

  titleLink!.href = videoData.url;

  const title = titleLink!.querySelector("h3");

  title!.textContent = videoData.title;
  title!.title = videoData.title;

  const channelLink = videoContainer.querySelector<HTMLAnchorElement>(
    'a[data-test-selector="ChannelLink"].ScCoreLink-sc-16kq0mq-0.eYjhIv.tw-link'
  );

  const channelAvatarElement = videoContainer.querySelector<HTMLImageElement>(
    "img.InjectLayout-sc-1i43xsx-0.bEwPpb.tw-image.tw-image-avatar"
  );

  channelLink!.href = videoData.channel.url;
  channelLink!.textContent = videoData.channel.name;
  channelAvatarElement!.src = videoData.channel.thumbnail;

  const categoryLink = videoContainer.querySelector<HTMLAnchorElement>(
    'a[data-a-target="preview-card-game-link"]'
  );

  categoryLink!.href = videoData.category.url;
  categoryLink!.textContent = videoData.category.name;

  return videoContainer;
};

const clearSection = (section: HTMLElement) => {
  const children = Array.from(section.children);

  children.forEach((child) => {
    const htmlChild = child as HTMLElement;
    htmlChild.style.display = "none";
  });
};

export const displayVideos = () => {
  const videos = getVideos();

  const videoSection = document.getElementById("following-page-main-content");

  if (!videoSection) {
    console.error("Could not display videos : No video section");
    return;
  }

  clearSection(videoSection);

  const sectionTitle = createSectionTitle("Watch later");

  videoSection.appendChild(sectionTitle);

  const videoContainer = document.createElement("div");
  videoContainer.classList.add(
    "ScTower-sc-1sjzzes-0",
    "czzjEE",
    "tw-tower",
    "watch-later-video-container"
  );

  videoSection.appendChild(videoContainer);

  videos.forEach((video) => {
    const videoElement = createVideoElement(video);
    videoContainer.appendChild(videoElement);
  });
};

export const clearVideos = () => {
  // remove added content
  const watchLaterVideoContainer = document.querySelector(
    ".watch-later-video-container"
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
