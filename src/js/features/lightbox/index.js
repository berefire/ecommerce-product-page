import { DOM } from "@js/shared/dom.js";

import { createLightboxController } from "./controller.js";
import { bindLightboxEvents } from "./events.js";

export function initializeLightbox({
    galleryController,
    lightboxGalleryController,
}) {
    const lightboxController = createLightboxController({
        lightbox: DOM.lightbox,
        triggerButton: DOM.productImageTrigger,
        galleryController,
        lightboxGalleryController,
    });

    bindLightboxEvents({
        triggerButton: DOM.productImageTrigger,
        closeButton: DOM.lightboxCloseButton,
        lightbox: DOM.lightbox,
        lightboxController,
    });
}
