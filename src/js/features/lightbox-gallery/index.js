import { DOM } from "../../shared/dom.js";

import { createGalleryController } from "../gallery/controller.js";
import { bindGalleryEvents } from "../gallery/events.js";

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