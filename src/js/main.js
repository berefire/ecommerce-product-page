import "@styles/main.css";

import {
    initializeAvatar,
    initializeMenu,
    initializeGallery,
    initializeLightbox,
    initializeLightboxGallery,
    initializeQuantityBox,
    initializeCart,
    initializeAddToCart,
} from "@js/features";

const galleryController = initializeGallery();
const lightboxGalleryController = initializeLightboxGallery();
const quantityController = initializeQuantityBox();
const cartController = initializeCart();

initializeAvatar();
initializeMenu();
initializeLightbox({
    galleryController,
    lightboxGalleryController,
});
initializeAddToCart({
    quantityController,
    cartController,
});