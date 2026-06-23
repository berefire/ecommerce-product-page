import { isDesktop, lockScroll, unlockScroll } from "@js/shared";

export function createLightboxController({
    lightbox,
    triggerButton,
    galleryController,
    lightboxGalleryController,
}) {
    function openLightbox() {
        if (!isDesktop()) {
            return;
        }

        const currentIndex = galleryController.getCurrentIndex();

        lightboxGalleryController.showImage(currentIndex);

        lightbox.showModal();
        triggerButton.setAttribute("aria-expanded", "true");
        lockScroll();
    }

    function closeLightbox() {
        if (!lightbox.open) {
            return;
        }

        lightbox.close();
        unlockScroll();
        triggerButton.setAttribute("aria-expanded", "false");
        triggerButton.focus();
    }

    function handleViewportChange(event) {
        if (!event.matches) {
            closeLightbox();
        }
    }

    return {
        openLightbox,
        closeLightbox,
        handleViewportChange
    };
}