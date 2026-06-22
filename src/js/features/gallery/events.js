import { addSafeEventListener } from "@js/shared";

export function bindGalleryEvents({
    previousButton,
    nextButton,
    thumbnailButtons,
    galleryController,
}) {
    addSafeEventListener(previousButton, "click", galleryController.showPreviousImage, "Previous Image Button");

    addSafeEventListener(nextButton, "click", galleryController.showNextImage, "Next Image Button");

    thumbnailButtons.forEach((button, index) => {
        addSafeEventListener(button, "click", () => galleryController.showImage(index), `Thumbnail Button ${index + 1}`);
    });
}