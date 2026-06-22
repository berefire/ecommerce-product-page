import { addSafeEventListener, onDesktopChange } from "@js/shared";

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