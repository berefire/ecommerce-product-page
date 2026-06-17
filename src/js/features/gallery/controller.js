import { PRODUCT_IMAGES } from "../../shared/constants.js";

export function createGalleryController({
  imageElement,
  thumbnailButtons,
  announcerElement = null,
}) {
  let currentIndex = 0;

  function render() {
    const image = PRODUCT_IMAGES[currentIndex];

    imageElement.src = image.full;
    imageElement.alt = image.alt;

    if (announcerElement) {
      announcerElement.textContent = `Image ${currentIndex + 1} of ${PRODUCT_IMAGES.length}`;
    }

    if (thumbnailButtons?.length) {
      thumbnailButtons.forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === currentIndex));
      });
    }
  }

  function showImage(index) {
    if (index < 0 || index >= PRODUCT_IMAGES.length) {
      return;
    }

    currentIndex = index;

    render();
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % PRODUCT_IMAGES.length;

    render();
  }

  function showPreviousImage() {
    currentIndex =
      (currentIndex - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length;

    render();
  }

  function getCurrentIndex() {
    return currentIndex;
  }

  render();

  return {
    showImage,
    showNextImage,
    showPreviousImage,
    getCurrentIndex,
  };
}
