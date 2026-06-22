import { addSafeEventListener } from "@js/shared/dom.js";
import { onDesktopChange } from "@js/shared/media.js";

export function bindLightboxEvents({
    triggerButton,
    closeButton,
    lightbox,
    lightboxController,
}) {
    addSafeEventListener(triggerButton, "click", lightboxController.openLightbox, "Lightbox Trigger Button");

    addSafeEventListener(closeButton, "click", lightboxController.closeLightbox, "Lightbox Close Button");

    onDesktopChange(lightboxController.handleViewportChange);

    addSafeEventListener(lightbox, "cancel", (event) => {
        event.preventDefault();
        lightboxController.closeLightbox();
    }, "Lightbox Cancel Escape",);
}