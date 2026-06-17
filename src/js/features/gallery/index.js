import { DOM } from "../../shared/dom.js";
import { isDesktop, onDesktopChange } from "../../shared/media.js";

import { createGalleryController } from "./controller.js";
import { bindGalleryEvents } from "./events.js";

function updateProductImageTrigger(){
    if (isDesktop()) {
        DOM.productImageTrigger.removeAttribute("tabindex");
    } else {
        DOM.productImageTrigger.setAttribute("tabindex", "-1");
    }
}

export function initializeGallery() {
    const galleryController = createGalleryController({
        imageElement: DOM.productImage,
        thumbnailButtons: DOM.thumbnailButtons,
        announcerElement: DOM.galleryAnnouncer,
    });

    updateProductImageTrigger();
    onDesktopChange(updateProductImageTrigger);

    bindGalleryEvents({
        previousButton: DOM.galleryPreviousButton,
        nextButton: DOM.galleryNextButton,
        thumbnailButtons: DOM.thumbnailButtons,
        galleryController,
    });

    return galleryController;
}