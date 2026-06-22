import { DOM } from "@js/shared";

import { createGalleryController } from "@js/features/gallery/controller.js";
import { bindGalleryEvents } from "@js/features/gallery/events.js";

export function initializeLightboxGallery() {
    const lightboxGalleryController =
        createGalleryController({
            imageElement: DOM.lightboxImage,
            thumbnailButtons:
                DOM.lightboxThumbnailButtons,

            announcerElement:
                DOM.lightboxAnnouncer,
        });

    bindGalleryEvents({
        previousButton:
            DOM.lightboxPreviousButton,

        nextButton:
            DOM.lightboxNextButton,

        thumbnailButtons:
            DOM.lightboxThumbnailButtons,

        galleryController:
            lightboxGalleryController,
    });

    return lightboxGalleryController;
}